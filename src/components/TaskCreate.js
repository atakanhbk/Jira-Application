import { useState } from "react";

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesk] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesk(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesk("");
  };

  return (
    <div className="task-create">
      <h3>Please Add Task</h3>
      <form className="task-form">
        <label className="task-label">Title</label>
        <input value={title} className="task-input" onChange={handleChange} />
        <label className="task-label">Enter Your Task</label>
        <textarea
          value={taskDesc}
          className="task-input"
          onChange={handleTaskChange}
          rows={5}
        />
        <button className="task-button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
