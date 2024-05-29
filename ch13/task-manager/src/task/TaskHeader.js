function TaskHeader({title, children}) {
  return (
    <header className="card-header">
      <p className="card-title">{title}</p>
      {children}
    </header>
  );
}

export default TaskHeader;
