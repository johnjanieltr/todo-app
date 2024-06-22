const TaskItem = ({ task }) => {
  return (
    <li className="relative flex justify-between items-center py-3.5 px-5 text-light-grayishBlue-800">
      <div className="flex items-center">
        <span className="block w-5 h-5 mr-3 border border-light-grayishBlue-100 rounded-full cursor-pointer"></span>
        <p className="text-sm">{task.title}</p>
      </div>
      <span className="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="w-3.5 h-3.5">
          <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
        </svg>
      </span>
      <span className="block absolute left-0 bottom-0 w-full h-px bg-light-grayishBlue-100"></span>
    </li>
  );
};

export default TaskItem;
