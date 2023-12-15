import React, { useState } from "react";
import "./todo.css";

function Component(props) {
  const [isChecked, setisChecked] = useState(false);
  const { task, tasks, id, setTasks } = props;

  const handleDelete = (e) => {
    const updatedTasks = tasks.filter((task) => task.id != e.target.id);
    console.log("handleDelete");
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  const handleChange = (e) => {
    const updatedTasks = tasks.map((taskItem) =>
      taskItem.id === task.id
        ? { ...taskItem, taskDesc: e.target.value }
        : taskItem
    );
    setTasks(updatedTasks);
  };
  
  const handleCheckboxChange = () => {
    setisChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div className="inputElement">
      {/*============ CHECK BOX ============ */}
      <input
        id={id}
        type="checkbox"
        className="checkbox"
        // checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {/*============== Text Input ============ */}
      <input
        className={isChecked ? "checkedTask" : "task"}
        id={id}
        type="text"
        value={task.taskDesc}
        onChange={handleChange}
        disabled={isChecked ? true : false}
      />
      {/*=============== Delete Button ============ */}
      <button className="deleteBtn" id={id} onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Component;
