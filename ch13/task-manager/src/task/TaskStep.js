import {useContext} from "react";
import TaskContext from "./TaskContext";
import TaskStepControl from "./TaskStepControl";

function TaskStep({taskID, step, position}) {
  const dispatch = useContext(TaskContext);
  const onDragStart = (evt) => {
    const initialPos = evt.currentTarget.dataset.position;
    evt.dataTransfer.setData("app/initPos", initialPos);
    evt.dataTransfer.setData("app/task", taskID);
  };
  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move"; 
  };
  const onDrop = (evt) => {
    evt.preventDefault();
    const fromTaskID = Number(evt.dataTransfer.getData("app/task"));
    if (taskID !== fromTaskID) return;
    const fromPos = Number(evt.dataTransfer.getData("app/initPos"));
    const toPos = Number(evt.currentTarget.dataset.position);
    dispatch({
      type: "priorityStep",
      taskID,
      fromPos,
      toPos
    });
  };

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
        position={position}
      /> 
    </li>
  );
}

export default TaskStep;
