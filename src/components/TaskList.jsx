import { useContext } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { TaskContext } from "../context/taskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, setTasks, filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

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
    <div className="flex flex-col grow min-h-44 rounded-t-md overflow-hidden shadow-lg bg-white dark:bg-dark-blue-800">
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
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
};

export default TaskList;
