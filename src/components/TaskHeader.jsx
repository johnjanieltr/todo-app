import ThemeToggleButton from "./ThemeToggleButton";

const TaskHeader = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="uppercase tracking-widest font-bold text-white text-3xl select-none md:text-4xl">
        TODO
      </h1>
      <ThemeToggleButton />
    </header>
  );
};

export default TaskHeader;
