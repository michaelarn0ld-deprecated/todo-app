import React from 'react';

function ToDo(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p
        className={
          props.item.completed ? 'todo-item-done' : 'todo-item-not-done'
        }
      >
        {props.item.text}
      </p>
    </div>
  );
}

export default ToDo;
