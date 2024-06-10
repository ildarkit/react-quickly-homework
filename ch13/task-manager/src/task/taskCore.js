function calcProgress(task) {
  const progress = task.steps.length > 0 ? 
    (task.steps.filter(step => step.isDone).length / task.steps.length) * 100 : 0;
  return progress.toFixed(1);
}

function swapSteps(task, stepID, priority) {
  const stepPos = task.steps.findIndex(step => step.id === stepID);
  const newPos = priority === "up" ? stepPos - 1 : stepPos + 1;
  if (newPos < 0 || newPos >= task.steps.length)
    return task.steps;
  return task.steps.map((step, i, steps) => {
    if (i === stepPos) 
      return steps[newPos];
    else if (i === newPos)
      return steps[stepPos];
    return step;
  });
}

function addTask(tasks, {title}) {
  return tasks.concat({
    id: Math.random() * 1_000_000,
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

function priorityStep(tasks, {taskID, stepID, priority}) {
  return tasks.map(task => {
    return task.id === taskID ?
    { ...task, steps: swapSteps(task, stepID, priority) } : task
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
