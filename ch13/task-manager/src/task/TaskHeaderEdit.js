import Button from "../Button";

function TaskHeaderEdit({title, editTask, children}) {
  const onSubmit = evt => {
    evt.preventDefault();
    editTask(evt.target.title.value);
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
      {children}
    </header>
  );
}

export default TaskHeaderEdit;
