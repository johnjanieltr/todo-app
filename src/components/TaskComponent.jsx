import TaskHeader from "./TaskHeader";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFooter from "./TaskFooter";
import DndMessage from "./DndMessage";

const TaskComponent = () => {
  return (
    <main className="absolute flex flex-col top-6 left-0 right-0 bottom-0 m-auto w-85p h-[85vh] min-w-56 max-w-lg font-josefin md:top-8">
      <TaskHeader />
      <TaskForm />
      <TaskList />
      <TaskFooter />
      <DndMessage />
    </main>
  );
};

export default TaskComponent;
