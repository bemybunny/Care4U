import React, { useState,useRef } from "react";
import Task from "./Task";
import './medicalnote.css';

function Medicalnote() {

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const audioRef = useRef(null);


const setAlarm = () => {
  if (alarmTime) {
    const alarmDate = new Date(alarmTime);
    const currentDate = new Date();

    if (alarmDate > currentDate) {
      const timeDifference = alarmDate - currentDate;
      setTimeout(() => {
        audioRef.current.play(); // Play the alarm sound
        alert("Alarm! Time to wake up!");
        setIsAlarmSet(false);
      }, timeDifference);

      setIsAlarmSet(true);
    } else {
      alert("Invalid alarm time. Please choose a future time.");
    }
  } else {
    alert("Please set an alarm time.");
  }
};

  const addTask = () => {
    if (taskText !== "") {
      const newTask = {
        text: taskText,
        date: taskDate,
        time: taskTime,
      };

      setTasks([...tasks, newTask]);
      setTaskText("");
      setTaskDate("");
      setTaskTime("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="medicalnote">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)
}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            date={task.date}
            time={task.time}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
      <h1>Alarm Clock</h1>
      <div className="alarm-input">
        <input
          type="datetime-local"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <button onClick={setAlarm}>Set Alarm</button>
      </div>
      {isAlarmSet && <p>Alarm is set for: {new Date(alarmTime).toLocaleString()}</p>}
      <audio ref={audioRef}>
        <source src="alarm.mp3" type="audio/mpeg" />
      </audio>
    </div>
      );
}

export default Medicalnote;



