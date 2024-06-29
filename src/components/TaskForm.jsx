import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/taskContext";

const TaskList = () => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask("");
    inputRef.current.blur();
  };

  return (
    <form
      className="flex items-center py-3.5 px-5 mb-6 bg-white dark:bg-dark-blue-800 rounded-md shadow-lg md:py-4 md:px-6"
      onSubmit={handleSubmit}
    >
      <span className="block w-5 h-5 mr-3 border border-light-grayishBlue-100 dark:border-dark-blue-300 rounded-full cursor-pointer"></span>
      <input
        type="text"
        ref={inputRef}
        placeholder="Create a new todo..."
        className="outline-0 text-xs mt-0.5 bg-inherit grow text-light-grayishBlue-800 dark:text-dark-blue-100 md:text-sm"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
    </form>
  );
};

export default TaskList;
