import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom: '1px #ccc',
            marginBottom: '5px',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
               <p >
                   <input type= "checkbox" onChange={this.props.markComplete.bind(this,id)} style={{marginRight : '3px'}}/>
                    {title}
                  <button style = {btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>  
                </p>
                
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor : '#565050',
    color  : '#fff',
    border : 'none',
    padding : '3px 10px',
    borderRadius : '50%',
    cursor: 'pointer',
    float : 'right'

}

export default TodoItem
