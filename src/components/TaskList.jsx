import { useContext } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, setTasks, filter, clearCompletedTasks } =
    useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

  const itemsLeft = () => {
    let itemsLeft = 0;
    tasks.forEach((task) => {
      if (!task.isCompleted) itemsLeft++;
    });
    return itemsLeft;
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (!active.id !== over.id) {
      setTasks((tasks) => {
        const oldIndex = tasks.findIndex((task) => task.id === active.id);
        const newIndex = tasks.findIndex((task) => task.id === over.id);
        return arrayMove(tasks, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="flex flex-col grow min-h-44 mb-4 rounded-md overflow-hidden shadow-lg bg-white dark:bg-dark-blue-800">
      {filteredTasks.length === 0 ? (
        <span className="block mt-3 text-sm text-center md:mt-4 md:text-base text-light-grayishBlue-800 dark:text-dark-blue-100">
          No tasks to show
        </span>
      ) : (
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <ul className="overflow-y-auto">
              {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      )}

      <div className="flex justify-between py-3.5 px-5 mt-auto text-xs text-light-grayishBlue-400 dark:text-dark-blue-300 md:text-sm">
        <span>{itemsLeft()} items left</span>
        <button type="button" onClick={() => clearCompletedTasks()}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskList;
