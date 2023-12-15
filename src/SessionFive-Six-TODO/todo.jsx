import React, { useState } from "react";
import Component from "./Component";
import "./todo.css";
import useLocalStorage from "../custom Hooks/useLocalStorage";

function Todo() {
  const [userInput, setuserInput] = useState("");
  const [userSearchInput, setUserSearchInput] = useState("");

  const [tasks, setTasks] = useLocalStorage("tasks", [
    { taskDesc: "Prepare lunch for the family ", id: 8 },
    { taskDesc: "Summarize key talking points", id: 1 },
    { taskDesc: "Organize books by genre", id: 2 },
    { taskDesc: "Schedule dentist appointment", id: 3 },
    { taskDesc: "Practice meditation", id: 4 },
  ]);

  const handleInputChange = (e) => {
    setuserInput(e?.target.value);
  };
  const handleUserSearchInput = (e) => {
    setUserSearchInput(e?.target.value);
  };

  const handleAdd = () => {
    if (userInput.length !== 0) {
      setTasks([...tasks, { taskDesc: userInput, id: getNextId() }]);
    }
    setuserInput("");
  };

  const getNextId = () => {
    const maxId = tasks.reduce(
      (max, task) => (task.id > max ? task.id : max),
      -1
    );
    return maxId + 1;
  };

  console.log(userSearchInput.split(" "));

  return (
    <div className="container">
      <h1>TODO LIST </h1>
      {/* ================================== */}
      <div className="wrapper">
        <label htmlFor="input"> Search </label>
        <input
          className="addTaskInput"
          type="text"
          name="searchInput"
          value={userSearchInput}
          onChange={handleUserSearchInput}
        />
        {/* ================================== */}
      </div>

      <div className="wrapper">
        <label htmlFor="input"> TASK </label>
        <input
          className="addTaskInput"
          type="text"
          name="input"
          id="input"
          value={userInput}
          onChange={handleInputChange}
        />
        <button className="AddBtn" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="taskLine">
        {/* {tasks.map((task) =>
          task.taskDesc
            .toLowerCase()
            .includes(userSearchInput.toLowerCase()) ? (
            <Component
              key={task.id}
              task={task}
              tasks={tasks}
              id={task.id}
              setTasks={setTasks}
            />
          ) : (
            <div />
          )
        )} */}
        {tasks
          .filter((taskObj) =>
            taskObj.taskDesc
              .toLowerCase()
              .includes(userSearchInput.toLowerCase())
          )
          .map((task) => (
            <Component
              key={task.id}
              task={task}
              tasks={tasks}
              id={task.id}
              setTasks={setTasks}
            />
          ))}
      </div>
    </div>
  );
}

export default Todo;
