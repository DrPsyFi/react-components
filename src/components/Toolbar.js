import React from 'react'

const Toolbar = ({allChecked, handleToolbarCheckbox, handleDelete}) => (
  <div>
    <input type="checkbox" checked={allChecked} onChange={(event) => handleToolbarCheckbox(event.target.checked)}/>
    <button onClick={() => handleDelete() }>Delete</button>
  </div>
)

export default Toolbar
