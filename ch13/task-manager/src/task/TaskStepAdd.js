import {useContext} from "react";
import Button from "../Button";
import TaskContext from "./TaskContext";

function TaskStepAdd({task}) {
  const dispatch = useContext(TaskContext);
  const onSubmit = evt => {
    evt.preventDefault();
    dispatch({type: "addStep", taskID: task.id, title: evt.target.title.value})
    evt.target.reset();
  };

  return (
    <li className="step">
      <form className="step-form" onSubmit={onSubmit}>
        <input
          className="card-title-input"
          placeholder="Add new step"
          name="title"
        /> 
        <Button
          className="icon-button step-button"
          icon="plus"
          alt="Add step"
        />
      </form>
    </li>
  );
}

export default TaskStepAdd;
