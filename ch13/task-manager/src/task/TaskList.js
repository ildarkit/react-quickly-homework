import Task from "./Task";
import TaskAdd from "./TaskAdd";

function TaskList() {
  return (
    <ol className="lane">
      {tasks.map(task => <Task {...task}/>)} 
      <TaskAdd/>
    </ol>
  );
}

export default TaskList;
