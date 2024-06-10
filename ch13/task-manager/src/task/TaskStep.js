import {useContext} from "react";
import TaskContext from "./TaskContext";
import TaskStepControl from "./TaskStepControl";

function TaskStep({taskID, step, position}) {
  const dispatch = useContext(TaskContext);
  const onDragStart = (evt) => {
    const initialPos = evt.currentTarget.dataset.position;
    evt.dataTransfer.setData("application/task", initialPos);
  };
  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move"; 
  };
  const onDrop = (evt) => {
    evt.preventDefault();
    const fromPos = Number(evt.dataTransfer.getData("application/task"));
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
