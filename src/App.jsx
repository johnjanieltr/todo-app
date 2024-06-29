import { ThemeProvider } from "./context/themeContext";
import { TaskProvider } from "./context/taskContext";
import AppBackground from "./components/AppBackground";
import Attribution from "./components/Attribution";
import TaskComponent from "./components/TaskComponent";

const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <TaskComponent />
        <AppBackground />
        <Attribution />
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
