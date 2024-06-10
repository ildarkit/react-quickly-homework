import {useContext} from "react";
import TaskContext from "./TaskContext";
import TaskStepControl from "./TaskStepControl";

function TaskStep({taskID, step, position}) {
  const dispatch = useContext(TaskContext);
  const onDragStart = (evt) => {
    const initialPos = Number(evt.currentTarget.dataset.position);
    evt.dataTransfer.setData("initialPos", initialPos);
  };
  const onDragOver = (evt) => {
    evt.preventDefault();
    const fromPos = evt.dataTransfer.getData("initialPos");
    const toPos = Number(evt.currentTarget.dataset.position);
    dispatch({
      type: "priorityStepDnD",
      taskID,
      stepID: step.id,
      fromPos,
      toPos
    });
  };
  const onDrop = () => {};

  return (
    <li
      data-position={position}
      draggable="true" 
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className="step"
    >
      <TaskStepControl
        taskID={taskID}
        step={step}
      /> 
    </li>
  );
}

export default TaskStep;
