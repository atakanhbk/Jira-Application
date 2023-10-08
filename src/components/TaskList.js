import TaskShow from "./TaskShow";

function TaskList({ tasks , onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow onDelete={onDelete} key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
