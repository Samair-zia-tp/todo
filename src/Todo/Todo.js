import React from 'react';
import './Todo.css';

const toDo = (props) => {
  return(
    <div className="todo-input">
      <input type="text" placeholder="What needs to be done?" onChange={props.name} value={props.val}/>
    </div>
  )
}

export default toDo;