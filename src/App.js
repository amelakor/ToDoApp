import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';
import styles from './App.css';
import axios from 'axios';


import Header from './components/layout/Header/Header';
import Slider from './components/layout/Slider/Slider';
import AboutSec from './components/layout/About/AboutSec';
import Footer from './components/layout/Footer/Footer';

import Todos from './components/Todos/Todos';
import AddToDo from './components/Todos/AddToDo';

import About from './components/pages/About';





class App extends Component{
   state = {
     todos: [ ]
   }
   
   componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
     .then(res => this.setState({todos:res.data}))
   }
   //Toggle Complete
   markComplete = (id) => {
    this.setState ( {
       todos: this.state.todos.map(todo => {
         if(todo.id === id){
           todo.completed = !todo.completed
         }
         return todo
       })
    })
   }
   //DeleteTodo

   delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    } 
    
  
   //Add To DO
   addTodo = (title) => {
     if(title !== ''){
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, 
        completed: false
       })
       .then(res => this.setState({todos: [...this.state.todos, res.data] }))  
     } else {
       alert('Please type something...')
     }
   }
    render(){
        return(
          <Router>
          <div className="App" style={styles}>
              <div className="container">
                <Header/>
                <Route exact path="/" render={props => ( 
                  <React.Fragment>
                     <Slider />
                     <AboutSec />
                   </React.Fragment>
                )} />

                <Route path="/about" component={About} />
                <AddToDo addTodo= {this.addTodo}/>
                <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
                <Footer />
              </div>
        </div>
        </Router>
        )
    }
}

export default App;