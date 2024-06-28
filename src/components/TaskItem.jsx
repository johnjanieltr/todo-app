import { useContext } from "react";
import PropTypes from "prop-types";
import { TaskContext } from "../context/TaskContext";
import iconCheck from "../assets/icons/icon-check.svg";
import iconCross from "../assets/icons/icon-cross.svg";

const TaskItem = ({ task }) => {
  const { deleteTask, changeTaskStatus } = useContext(TaskContext);

  const buttonBasicStyles =
    "flex justify-center items-center w-5 h-5 mr-3 border border-light-grayishBlue-100 dark:border-dark-blue-300 rounded-full cursor-pointer";
  const buttonActiveStyle = buttonBasicStyles + " bg-inherit";
  const buttonInactiveStyle = buttonBasicStyles + " bg-check-gradient";

  return (
    <>
      <li className="relative flex justify-between items-center py-3.5 px-5">
        <div className="flex items-center">
          <button
            type="button"
            className={task.isActive ? buttonActiveStyle : buttonInactiveStyle}
            onClick={() => changeTaskStatus(task.id)}
          >
            <img
              src={iconCheck}
              alt="Icon check"
              className={task.isActive ? "w-3 h-2 hidden" : "w-3 h-2 block"}
            />
          </button>
          <p
            className={
              task.isActive
                ? "mt-0.5 text-sm text-light-grayishBlue-800 dark:text-dark-blue-100 md:text-base"
                : "mt-0.5 text-sm line-through text-light-grayishBlue-100 dark:text-dark-blue-300 md:text-base"
            }
          >
            {task.title}
          </p>
        </div>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => deleteTask(task.id)}
        >
          <img src={iconCross} alt="Icon cross" className="w-3.5 h-3.5" />
        </button>
      </li>
      <span className="block w-full h-px bg-light-grayishBlue-100 dark:bg-dark-blue-600"></span>
    </>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
};

export default TaskItem;
