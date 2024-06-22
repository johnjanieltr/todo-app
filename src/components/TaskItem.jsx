import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";


const TaskItem = ({ task }) => {
  const {deleteTask, changeTaskStatus} = useContext(TaskContext);

  const buttonBasicStyles = "flex justify-center items-center w-5 h-5 mr-3 border border-light-grayishBlue-100 rounded-full cursor-pointer"
  const buttonActiveStyle = buttonBasicStyles + " bg-white";
  const buttonInactiveStyle = buttonBasicStyles + " bg-check-gradient";

  return (
    <li className="relative flex justify-between items-center py-3.5 px-5 text-light-grayishBlue-800">
      <div className="flex items-center">
        <button
          type="button"
          className={task.isActive ? buttonActiveStyle : buttonInactiveStyle}
          onClick={() => changeTaskStatus(task.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={task.isActive ? "w-3 h-2 hidden" : "w-3 h-2 block"}
          >
            <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
          </svg>
        </button>
        <p
          className={
            task.isActive
              ? "text-sm text-light-grayishBlue-800"
              : "text-sm line-through text-light-grayishBlue-100"
          }
        >
          {task.title}
        </p>
      </div>
      <button type="button" className="cursor-pointer" onClick={() => deleteTask(task.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="w-3.5 h-3.5">
          <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
        </svg>
      </button>
      <span className="block absolute left-0 bottom-0 w-full h-px bg-light-grayishBlue-100"></span>
    </li>
  );
};

export default TaskItem;
