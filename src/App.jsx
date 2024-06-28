import AppBackground from "./components/AppBackground";
import TaskHeader from "./components/TaskHeader";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFooter from "./components/TaskFooter";
import Attribution from "./components/Attribution";

const App = () => {
  return (
    <>
      <AppBackground />
      <main className="absolute flex flex-col top-6 left-0 right-0 bottom-0 m-auto w-85p h-[85vh] min-w-56 max-w-lg font-josefin md:top-8">
        <TaskHeader />
        <TaskForm />
        <TaskList />
        <TaskFooter />
      </main>
      <Attribution />
    </>
  );
};

export default App;
