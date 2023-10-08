function TaskShow({task}) {
    console.log(task);
    return <div>
       <h3>Your Task</h3>
       <p>{task.title}</p>
       <h3>Things To Do</h3>
       <p>{task.taskDesc}</p>
    </div>;
}

export default TaskShow;