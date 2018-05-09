import React, { Component } from 'react'
import shortid from 'shortid'
import TodoItems from './TodoItems'
import Toolbar from './Toolbar'
import AddTodoItem from './AddTodoItem'

const todo = [
  {id: 'HkrtzegRz', task: 'teach react', checked: false},
  {id: 'Hyu3GlxAG', task: 'learn react', checked: true},
  {id: 'B19TGge0z', task: 'develop with react', checked: false}
]

class Todo extends Component{
  constructor(props){
    super(props)

    this.state = {
      todoItems: todo
    }
  }

  addToDo = task => {
    this.setState( { todoItems: [ ...this.state.todoItems, {id: shortid.generate(), task} ] } )
  }

  handleDelete = () => {
    this.setState( { todoItems: this.state.todoItems.filter((ele) => !ele.checked) } )
  }

  handleCheckbox = (idToUpdate, valueOfCheckbox) =>{
    this.setState( { todoItems: this.state.todoItems.map(ele => ele.id === idToUpdate ? {...ele, checked: valueOfCheckbox } : {...ele} ) } )
  }

  handleToolbarCheckbox = (valueOfCheckbox) => {
    this.setState( { todoItems: this.state.todoItems.map(ele => ({...ele, checked: valueOfCheckbox } ) ) } )
  }

  render(){
    return (
      <div>
        <AddTodoItem addToDo={ this.addToDo }/>
        <Toolbar
          allChecked={this.state.todoItems.reduce((acc, ele) => acc && ele.checked, true) }
          handleToolbarCheckbox={this.handleToolbarCheckbox}
          handleDelete={this.handleDelete}
        />
        <TodoItems
          todoItems={ this.state.todoItems }
          handleCheckbox={ this.handleCheckbox }
        />
      </div>
    )
  }
}

export default Todo
