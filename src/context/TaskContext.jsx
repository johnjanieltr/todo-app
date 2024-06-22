import { createContext, useEffect, useState } from "react";
import data from "../tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        isActive: true,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => task.isActive));
  };

  const changeTaskFilter = (filter) => {
    setFilter(filter);
  };

  const changeTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isActive: !task.isActive } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        changeTaskFilter,
        createTask,
        deleteTask,
        clearCompletedTasks,
        changeTaskStatus,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
