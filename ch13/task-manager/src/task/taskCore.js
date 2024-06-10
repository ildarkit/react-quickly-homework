function calcProgress(task) {
  const progress = task.steps.length > 0 ? 
    (task.steps.filter(step => step.isDone).length / task.steps.length) * 100 : 0;
  return progress.toFixed(1);
}

function moveSteps(task, fromPos, toPos) {
  if (toPos < 0 || toPos >= task.steps.length)
    return task.steps;
  const movedItem = task.steps[fromPos];
  const remainingItems = task
    .steps
    .filter((item, i) => i !== fromPos);
  return [
    ...remainingItems.slice(0, toPos),
    movedItem,
    ...remainingItems.slice(toPos)
  ]; 
}

function addTask(tasks, {title}) {
  return tasks.concat({
    id: Math.trunc(Math.random() * 1_000_000),
    title,
    steps: [],
    progress: 0
  });
}

function editTask(tasks, {id, title}) {
  return tasks.map(task => task.id === id ? {...task, title}: task);
}

function deleteTask(tasks, {id}) {
  return tasks.filter(task => task.id !== id);
}

function addStep(tasks, {taskID, title}) {
  tasks = tasks.map(task => task.id === taskID ?
    { ...task, 
      steps: task.steps.concat({
        id: Math.trunc(Math.random() * 1_000_000),
        title: title,
        isDone: false
      })
    } : task
  );
  const addStepTask = tasks.find(t => t.id === taskID);
  addStepTask.progress = calcProgress(addStepTask);
  return tasks;
}

function editStep(tasks, {taskID, stepID, ...props}) {
  const updateStep = step => {
    return step.id === stepID ?
      {...step, ...props} : step
  };
  tasks = tasks.map(task => task.id === taskID ?
    { ...task, steps: task.steps.map(step => updateStep(step)) } : task
  );
  const editStepTask = tasks.find(t => t.id === taskID);
  editStepTask.progress = calcProgress(editStepTask);
  return tasks;
}

function priorityStep(tasks, {taskID, fromPos, toPos}) {
  return tasks.map(task => {
    return task.id === taskID ?
    { ...task, steps: moveSteps(task, fromPos, toPos) } : task
  });
}

function deleteStep(tasks, {taskID, stepID}) {
  const delStep = (task, id) => {
    task.steps = task.steps.filter(step => step.id !== id);
    task.progress = calcProgress(task);
    return task;
  };
  return tasks.map(task => {
    return task.id === taskID ? 
      delStep(task, stepID) : task
  });
}

export {
  addTask,
  editTask,
  deleteTask,
  addStep,
  editStep,
  deleteStep,
  priorityStep
};
