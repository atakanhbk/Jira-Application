import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];

    setTasks(createTask);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>All Tasks</h1>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
