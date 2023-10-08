import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesk] = useState(task ? task.taskDesc : "");

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
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          
          <h3>Please Edit The Task !!!</h3>
          <form className="task-form">
            <label className="task-label">Edit Your Title</label>
            <input
              value={title}
              className="task-input"
              onChange={handleChange}
            />
            <label className="task-label">Edit Your Task</label>
            <textarea
              value={taskDesc}
              className="task-input"
              onChange={handleTaskChange}
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Complete
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add Task</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              className="task-input"
              onChange={handleChange}
            />
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
      )}
    </div>
  );
}

export default TaskCreate;
