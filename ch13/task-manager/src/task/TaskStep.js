import {useState, useContext} from "react";
import TaskContext from "./TaskContext";
import EditStep from "./EditStep";
import Button from "../Button";

function TaskStep({taskID, step}) {
  const [isEdit, setEdit] = useState(false);
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
  const priorityStep = (priority) => dispatch({
    type: "priorityStep",
    stepID: step.id,
    taskID,
    priority
  });

  return (
    <li className="step">
      {isEdit ? (
        <EditStep 
          taskID={taskID}
          stepID={step.id}
          title={step.title}
          handleStepState={() => setEdit(false)}
        />
      ) : (
      <>
        <label className="step-label">
          <input type="checkbox" defaultChecked={step.isDone} onChange={onChange}/>
          {step.isDone ? <s>{step.title}</s> : step.title}
        </label>
        {!step.isDone && (
          <Button 
            className="icon-button step-button" 
            icon="pencil" 
            alt="Edit step" 
            onClick={() => setEdit(true)}
          />
        )}
        <Button 
          className="icon-button step-button" 
          icon="trash" 
          alt="Delete step" 
          onClick={deleteStep}
        />
        <Button 
          className="icon-button step-button" 
          icon="up" 
          alt="Up step" 
          onClick={() => priorityStep("up")}
        />
        <Button 
          className="icon-button step-button" 
          icon="down" 
          alt="Down step" 
          onClick={() => priorityStep("down")}
        />
      </>
      )}
    </li>
  );
}

export default TaskStep;
