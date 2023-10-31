import React from "react";
import './App.css'
function Task({ text, date, time, onDelete }) {
  return (
    <li>
      <div className="task-details">
        <span>{text}</span>
        <span>Date: {date}</span>
        <span>Time: {time}</span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;
