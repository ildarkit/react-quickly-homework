import {useContext} from "react";
import TaskContext from "./TaskContext";
import Button from "../Button";

function TaskStep({taskID, step}) {
  const dispatch = useContext(TaskContext);
  const deleteStep = () => dispatch({
    type: "deleteStep", 
    taskID, 
    stepID: step.id
  });
  const onChange = (evt) => dispatch({ 
    type: "editStep",
    stepID: step.id,
    taskID,
    isDone: evt.target.checked
  });

  return (
    <li className="step">
      <label className="step-label">
        <input type="checkbox" defaultChecked={step.isDone} onChange={onChange}/>
        {step.isDone ? <s>{step.title}</s> : step.title}
      </label>
      <Button 
        className="icon-button step-button" 
        icon="trash" 
        alt="Delete step" 
        onClick={deleteStep}
      />
    </li>
  );
}

export default TaskStep;
