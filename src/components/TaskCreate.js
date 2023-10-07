function TaskCreate() {
  return (
    <div className="task-create">
      <h3>Please Add Task</h3>
      <form className="task-form">
        <label className="task-label">Title</label>
        <input className="task-input"/>
        <label className="task-label">Enter Your Task</label>
        <textarea className="task-input" rows={5}/>
        <button className="task-button">Create</button>
      </form>
    </div>
  );
}

export default TaskCreate;
