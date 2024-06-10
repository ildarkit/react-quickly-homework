import {useState, useContext} from "react";
import TaskContext from "./TaskContext";
import EditStepForm from "./EditStepForm";
import Button from "../Button";

function TaskStepControl({taskID, step, position}) {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useContext(TaskContext);
  const deleteStep = () => dispatch({
    type: "deleteStep", 
    taskID, 
    stepID: step.id
  });
  const editStep = (evt) => dispatch({ 
    type: "editStep",
    taskID,
    stepID: step.id,
    isDone: evt.target.checked
  });
  const priorityStep = (priority) => dispatch({
    type: "priorityStep",
    taskID,
    fromPos: position,
    toPos: priority === "up" ? position - 1 : position + 1,
  });

  return (
    <>
      {isEdit ? (
        <EditStepForm 
          taskID={taskID}
          stepID={step.id}
          title={step.title}
          handleStepState={() => setEdit(false)}
        />
      ) : (
        <>
          <label className="step-label">
            <input 
              type="checkbox"
              defaultChecked={step.isDone}
              onChange={editStep}
            />
            {step.isDone ? <s>{step.title}</s> : step.title}
          </label>
          <Button 
            className="icon-button step-button" 
            icon="pencil" 
            alt="Edit step" 
            onClick={() => setEdit(true)}
          />
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
    </>
  );
}

export default TaskStepControl;
