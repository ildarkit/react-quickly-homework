import Button from "../Button";

function TaskAdd() {
  return (
    <li className="card">
      <header className="card-header card-header-new">
        <form className="card-title-form">
          <input
            className="card-title card-title-input"
            placeholder="Add new task"
            name="title"
          /> 
          <Button className="icon-button" icon="plus" alt="Add task"/>
        </form>
      </header>
    </li>
  );
}

export default TaskAdd;
