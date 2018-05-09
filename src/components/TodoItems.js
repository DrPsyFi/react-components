import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems, deleteToDo, handleCheckbox}) => (
  <ul>
    { todoItems.map((todoItem, id) =>
        <TodoItem
          key={id}
          todoItem={todoItem}
          deleteToDo={deleteToDo}
          handleCheckbox={handleCheckbox}
        />
      ) 
    }
  </ul>
)

export default TodoItems
