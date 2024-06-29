import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

const TaskFooter = () => {
  const { tasks, filter, changeTaskFilter, clearCompletedTasks } =
    useContext(TaskContext);

  const itemsLeft = () => {
    let itemsLeft = 0;
    tasks.forEach((task) => {
      if (!task.isCompleted) itemsLeft++;
    });
    return itemsLeft;
  };

  return (
    <>
      <div className="flex justify-between py-3.5 px-5 mb-6 rounded-b-md text-xs shadow-md text-light-grayishBlue-400 dark:text-dark-blue-300 bg-white dark:bg-dark-blue-800 md:mb-10 md:text-sm md:shadow-lg">
        <span>{itemsLeft()} items left</span>
        <div className="hidden justify-between w-full max-w-44 text-base font-bold md:flex">
          <button
            type="button"
            className={
              filter === "all"
                ? "text-primary-600"
                : "text-light-grayishBlue-400 dark:text-dark-blue-300"
            }
            onClick={() => changeTaskFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={
              filter === "active"
                ? "text-primary-600"
                : "text-light-grayishBlue-400 dark:text-dark-blue-300"
            }
            onClick={() => changeTaskFilter("active")}
          >
            Active
          </button>
          <button
            type="button"
            className={
              filter === "completed"
                ? "text-primary-600"
                : "text-light-grayishBlue-400 dark:text-dark-blue-300"
            }
            onClick={() => changeTaskFilter("completed")}
          >
            Completed
          </button>
        </div>

        <button type="button" onClick={() => clearCompletedTasks()}>
          Clear Completed
        </button>
      </div>
      <div className=" flex justify-center mt-auto mb-8 py-3 px-5 rounded-md shadow-md bg-white dark:bg-dark-blue-800 md:hidden">
        <div className="relative top-1 flex justify-between w-full max-w-44 text-base font-bold">
          <button
            type="button"
            className={
              filter === "all"
                ? "text-primary-600"
                : "text-light-grayishBlue-400 dark:text-dark-blue-300"
            }
            onClick={() => changeTaskFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={
              filter === "active"
                ? "text-primary-600"
                : "text-light-grayishBlue-400 dark:text-dark-blue-300"
            }
            onClick={() => changeTaskFilter("active")}
          >
            Active
          </button>
          <button
            type="button"
            className={
              filter === "completed"
                ? "text-primary-600"
                : "text-light-grayishBlue-400 dark:text-dark-blue-300"
            }
            onClick={() => changeTaskFilter("completed")}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskFooter;
