import React from 'react'

const TodoItem = ({todoItem: {id, checked, task}, deleteToDo, handleCheckbox}) => (
  <li className={checked ? 'message' : 'message selected'}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => handleCheckbox(id, event.target.checked)}
    />
    {task}
  </li>
)

export default TodoItem
