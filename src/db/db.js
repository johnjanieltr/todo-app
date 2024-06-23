export const saveTasks = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

export const getTasks = () => JSON.parse(localStorage.getItem("tasks"));
