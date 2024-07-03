import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TaskContext } from "../context/taskContext";
import checkIcon from "../assets/icons/check-icon.svg";
import crossIcon from "../assets/icons/cross-icon.svg";

const TaskItem = ({ task }) => {
  const { deleteTask, changeTaskStatus } = useContext(TaskContext);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  useEffect(() => {
    // evitar el scroll mientras se arrastra (dispositivos táctiles)
    const handleTouchMove = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : "auto",
    touchAction: "none",
  };

  return (
    <>
      <div
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={`relative flex justify-between items-center py-3.5 px-5 md:py-4 bg-white dark:bg-dark-blue-800 ${
          isDragging ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => {
              changeTaskStatus(task.id);
            }}
            onPointerDown={(e) => e.preventDefault()}
            className={`flex justify-center items-center w-5 h-5 mr-3 md:mr-4 border border-light-grayishBlue-100 dark:border-dark-blue-300 rounded-full cursor-pointer select-none ${
              !task.isCompleted ? "bg-inherit" : "bg-check-gradient"
            }`}
          >
            <img
              src={checkIcon}
              alt="Icon check"
              className={!task.isCompleted ? "w-3 h-2 hidden" : "w-3 h-2 block"}
            />
          </button>
          <p
            className={`mt-0.5 text-sm md:mt-1 md:text-base font-medium ${
              !task.isCompleted
                ? "text-light-grayishBlue-800 dark:text-dark-blue-100"
                : "line-through text-light-grayishBlue-100 dark:text-dark-blue-300 "
            }`}
          >
            {task.title}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            deleteTask(task.id);
          }}
          onPointerDown={(e) => e.preventDefault()}
          className="cursor-pointer select-none"
        >
          <img src={crossIcon} alt="Icon cross" className="w-3.5 h-3.5" />
        </button>
      </div>
      <span className="block w-full h-px bg-light-grayishBlue-100 dark:bg-dark-blue-600"></span>
    </>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
};

export default TaskItem;
