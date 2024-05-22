import {useState} from "react";
import Button from "../Button";
import TaskHeader from "./TaskHeader";
import TaskHeaderEdit from "./TaskHeaderEdit";

function Task({title, taskID, editTask, deleteTask}) {
  const [isEdit, setEdit] = useState(false);
  const handleEdit = (id, value) => {
    setEdit(false);
    editTask(id, value);
  };
  return (
    <li className="card">
      {isEdit ? (
        <TaskHeaderEdit 
          title={title} 
          taskID={taskID} 
          handleEdit={handleEdit}
        />
      ) : (
        <TaskHeader title={title}/>
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
            onClick={() => deleteTask(taskID)}
          />
        </li>
      </ul>
    </li> 
  );
}
