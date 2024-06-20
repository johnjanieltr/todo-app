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
        className="flex items-center py-3 px-5 bg-lightWhite rounded-md"
        onSubmit={handleSubmit}
      >
        <span className="block w-4 h-4 mr-3 border border-black rounded-full"></span>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="outline-0 text-sm bg-inherit grow"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
      </form>
    </div>
  );
};

export default TaskList;
