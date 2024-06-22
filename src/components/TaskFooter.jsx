const TaskFooter = () => {
  return (
    <div className=" flex justify-center mt-auto mb-12 py-3 px-5 rounded-md bg-white">
      <div className="relative top-1 flex justify-between w-full max-w-44 text-base font-bold">
        <button type="button" className="text-primary-600">All</button>
        <button type="button" className="text-light-grayishBlue-400">Active</button>
        <button type="button" className="text-light-grayishBlue-400">Completed</button>
      </div>
    </div>
  );
};

export default TaskFooter;
