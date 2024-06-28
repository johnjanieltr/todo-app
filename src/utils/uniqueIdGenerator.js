const IDgenerator = (tasks) => {
  const existingIds = tasks.map((task) => task.id);
  let newId = Math.floor(Math.random() * 1000000);

  while (existingIds.includes(newId)) {
    newId = Math.floor(Math.random() * 1000000);
  }

  return newId;
};

export default IDgenerator;
