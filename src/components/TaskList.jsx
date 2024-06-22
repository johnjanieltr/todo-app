import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, filter, clearCompletedTasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return task.isActive;
    if (filter === "completed") return !task.isActive;
    return true;
  });

  const itemsLeft = () => {
    let itemsLeft = 0;
    tasks.forEach((task) => {
      if (task.isActive) itemsLeft++;
    });
    return itemsLeft;
  };

  return (
    <div className="flex flex-col grow mb-4 rounded-md overflow-hidden bg-white">
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div className="flex justify-between py-3.5 px-5 mt-auto text-sm text-light-grayishBlue-400">
        <span>{itemsLeft()} items left</span>
        <button type="button" onClick={() => clearCompletedTasks()}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskList;
