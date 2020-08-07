import React, { Component } from 'react';
import './AddToDo.css';
import backgroundForm from '../../images/imageFiles/background-form.jpg';


export class AddToDo extends Component {

    state = {
        title : ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''});
    }
   
    render(){
        return (
            <div className="main-form" style={formStyle}>
                <h1>What would you like to do today?</h1>
          <form onSubmit = {this.onSubmit} style={{display : 'flex', margin: '20px 0' }} >
          <input 
                type="text" 
                name="title" 
                style = {{flex: '10', padding : '10px'}}
                placeholder="Add To do"
                value = {this.state.title} 
                onChange = {this.onChange}/>
           <input 
                type="submit" 
                value="Submit"
                className ="btn"
                />
          </form>
          </div>
        )
    }
}
const formStyle = {
    backgroundImage : `url(${backgroundForm})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
}

export default AddToDo;
