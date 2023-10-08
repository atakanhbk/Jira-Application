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

  const handleOnUpdate = (id, title, titleDesc) => {
    console.log(id, title, titleDesc);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeletingTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>All Tasks</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={handleOnUpdate}
      />
    </div>
  );
}

export default App;
