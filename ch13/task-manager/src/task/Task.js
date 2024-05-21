import Button from "../Button";
import TaskHeader from "./TaskHeader";

function Task({title}) {
  return (
    <li className="card">
      <TaskHeader title={title}/>
      <ul className="card-controls">
        <li>
          <Button className="card-control" alt="Edit"/>
        </li>
        <li>
          <Button className="card-control" alt="Delete">
        </li>
      </ul>
    </li> 
  );
}
