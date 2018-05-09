import React from 'react'

const AddTodoItem = ({addToDo}) => {
  const add = (event) => {
    event.preventDefault()
    addToDo(event.target.item.value)
    event.target.item.value = ''
  }
  return (
    <form onSubmit={add} >
      <input type="text" name="item" />
      <input type="submit" value="Add" />
    </form>
  )
}

export default AddTodoItem
