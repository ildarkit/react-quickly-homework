import {useState, useContext} from "react";
import Button from "../Button";
import TaskHeader from "./TaskHeader";
import TaskHeaderEdit from "./TaskHeaderEdit";
import TaskStep from "./TaskStep";
import TaskStepAdd from "./TaskStepAdd";
import TaskContext from "./TaskContext";

function Task({task}) {
  const dispatch = useContext(TaskContext);
  const [isEdit, setEdit] = useState(false);
  const editTask = (title) => {
    setEdit(false);
    dispatch({type: "editTask", id: task.id, title});
  };
  const deleteTask = () => dispatch({type: "deleteTask", id: task.id});
  
  return (
    <li className="card">
      {isEdit ? (
        <TaskHeaderEdit title={task.title} editTask={editTask}>
          <p className="card-percentage">{`${task.progress}%`}</p>
        </TaskHeaderEdit>
      ) : (
        <TaskHeader title={task.title}>
          <p className="card-percentage">{`${task.progress}%`}</p>
        </TaskHeader>
      )}
      <ul className="card-controls">
        <li>
          <Button
            className="card-control" 
            alt="Edit" 
            onClick={() => setEdit(true)}
          />
        </li>
        <li>
          <Button 
            className="card-control" 
            alt="Delete" 
            onClick={deleteTask}
          />
        </li>
      </ul>
      <ol className="lane">
        {task.steps && task.steps.map(step => (
          <TaskStep
            key={step.id}
            taskID={task.id}
            step={step}
          />
        ))}
        <TaskStepAdd task={task}/>
      </ol>
    </li> 
  );
}

export default Task;
