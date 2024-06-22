import { useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setTask("");
  };

  return (
    <div className="">
      <form
        className="flex items-center py-3.5 px-5 mb-6 bg-white rounded-md"
        onSubmit={handleSubmit}
      >
        <span className="block w-5 h-5 mr-3 border border-light-grayishBlue-100 rounded-full cursor-pointer"></span>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="outline-0 text-sm bg-inherit grow text-light-grayishBlue-800"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
      </form>
    </div>
  );
};

export default TaskList;
