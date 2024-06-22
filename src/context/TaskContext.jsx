import { createContext, useEffect, useState } from "react";
import data from "../tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

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
        createTask,
        deleteTask,
        changeTaskStatus,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
