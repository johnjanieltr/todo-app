const TaskFooter = () => {
  return (
    <div className=" flex justify-center mt-auto mb-12 py-3 px-5 rounded-md bg-lightWhite">
      <div className="flex justify-between w-full max-w-44 text-base font-bold">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
    </div>
  );
};

export default TaskFooter;
