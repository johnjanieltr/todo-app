import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTasks, saveTasks } from "../db/db";
import uniqueIdGenerator from "../utils/uniqueIdGenerator";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const tasksList = getTasks();
    tasksList ? setTasks(tasksList) : saveTasks([]);
  }, []);

  useEffect(() => {
    setTimeout(() => saveTasks(tasks), 0);
  }, [tasks]);

  const createTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: uniqueIdGenerator(tasks),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.isCompleted));
  };

  const changeTaskFilter = (filter) => {
    setFilter(filter);
  };

  const changeTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
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
      {children}
    </TaskContext.Provider>
  );
};

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
