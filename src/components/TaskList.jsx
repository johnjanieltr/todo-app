import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="flex flex-col grow rounded-md overflow-hidden bg-lightWhite">
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div className="flex justify-between py-3.5 px-5 mt-auto bg-lightWhite text-sm">
        <span className="">{tasks.length} items left</span>
        <button type="button" className="">Clear Completed</button>
      </div>
    </div>
  );
};

export default TaskList;
