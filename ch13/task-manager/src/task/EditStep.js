import {useContext} from "react";
import Button from "../Button";
import TaskContext from "./TaskContext";

function EditStep({taskID, stepID, title, handleStepState}) {
  const dispatch = useContext(TaskContext);
  const onSubmit = (evt) => {
    evt.preventDefault();
    handleStepState();
     dispatch({
       type: "editStep",
       stepID,
       taskID,
       title: evt.target.title.value
     });
  };

  return (
    <form className="step-form" onSubmit={onSubmit}>
      <input
        className="card-title-input"
        defaultValue={title}
        name="title"
      /> 
      <Button
        className="icon-button step-button"
        icon="check"
        alt="Edit step"
      />
    </form>
  );
}

export default EditStep;
