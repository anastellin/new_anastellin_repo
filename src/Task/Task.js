import React from 'react';
import './TaskStyle.css';

const Task = (props) => {
    return (
      <div className="tasks">
        <div className="name">Name of task: {props.name}</div>
        <div>Description: {props.description}</div>
        <div>Completed: {String(props.completed)}</div>
        <button onClick={props.onClick} className="button">BTN</button>
      </div>
      )
    }

export default Task;