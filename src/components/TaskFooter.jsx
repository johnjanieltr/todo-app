import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskFooter = () => {
  const { filter, changeTaskFilter } = useContext(TaskContext);

  return (
    <div className=" flex justify-center mt-auto mb-12 py-3 px-5 rounded-md bg-white">
      <div className="relative top-1 flex justify-between w-full max-w-44 text-base font-bold">
        <button
          type="button"
          className={
            filter === "all" ? "text-primary-600" : "text-light-grayishBlue-400"
          }
          onClick={() => changeTaskFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={
            filter === "active" ? "text-primary-600" : "text-light-grayishBlue-400"
          }
          onClick={() => changeTaskFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={
            filter === "completed" ? "text-primary-600" : "text-light-grayishBlue-400"
          }
          onClick={() => changeTaskFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFooter;
