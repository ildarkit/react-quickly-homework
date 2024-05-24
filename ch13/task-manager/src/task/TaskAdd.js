import {useContext} from "react";
import Button from "../Button";
import TaskContext from "./TaskContext";

function TaskAdd() {
  const dispatch = useContext(TaskContext);
  const onSubmit = evt => {
    evt.preventDefault();
    dispatch({type: "addTask", title: evt.target.title.value})
    evt.target.reset();
  };

  return (
    <li className="card">
      <header className="card-header card-header-new">
        <form className="card-title-form" onSubmit={onSubmit}>
          <input
            className="card-title card-title-input"
            placeholder="Add new task"
            name="title"
          /> 
          <Button className="icon-button" icon="plus" alt="Add task"/>
        </form>
      </header>
    </li>
  );
}

export default TaskAdd;
