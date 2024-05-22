import Button from "../Button";

function TaskHeaderEdit({title, taskID, editTask}) {
  const onSubmit = evt => {
    evt.preventDefault();
    editTask(taskID, evt.target.title.value);
  };
  return (
    <header className="card-header">
      <form className="card-title-form" onSubmit={onSubmit}>
        <input
          className="card-title card-title-input"
          defaultValue={title}
          name="title"
        />
        <Button className="icon-button" icon="check" alt="Edit step"/>
      </form>
    </header>
  );
}

export default TaskHeaderEdit;
