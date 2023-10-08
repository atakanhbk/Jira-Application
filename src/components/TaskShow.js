function TaskShow({ task }) {
  console.log(task);
  return (
    <div className="task-show">
      <h3>Your Task</h3>
      <p>{task.title}</p>
      <h3>Things To Do</h3>
      <p>{task.taskDesc}</p>

      <div>
        <button>Delete</button>
        <button>Update</button>
      </div>
    </div>
  );
}

export default TaskShow;
