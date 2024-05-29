import {useReducer, useEffect} from "react";
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import TaskContext from "./TaskContext";
import initialState from "./fixture";

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || initialState;
}

function calcProgress(task) {
  const progress = task.steps.length > 0 ? 
    (task.steps.filter(step => step.isDone).length / task.steps.length) * 100 : 0;
  return progress.toFixed(1);
}

function reducer(tasks, {type, ...rest}) {
  switch (type) {
    case "addTask":
      return tasks.concat({id: Math.random() * 1_000_000, steps: [], progress: 0, ...rest});
    case "editTask":
      const {id, title} = rest;
      return tasks.map(task => task.id === id ? {...task, title}: task);
    case "deleteTask":
      return tasks.filter(task => task.id !== rest.id);
    case "addStep": 
      tasks = tasks.map(task => task.id === rest.taskID ?
        {
          ...task,
          steps: task.steps.concat(
            {
              id: Math.trunc(Math.random() * 1_000_000),
              title: rest.title,
              isDone: false
            }
          )
        } : task
      );
      const addStepTask = tasks.find(t => t.id === rest.taskID);
      addStepTask.progress = calcProgress(addStepTask);
      return tasks;
    case "editStep":
      const {stepID, taskID, ...props} = rest;
      const updateStep = step => {
        return step.id === stepID ?
          {...step, ...props} : step
      };
      tasks = tasks.map(task => task.id === taskID ?
          {
            ...task,
            steps: task.steps.map(step => updateStep(step)),
          } : task
      );
      let editStepTask = tasks.find(t => t.id === rest.taskID);
      editStepTask.progress = calcProgress(editStepTask);
      return tasks;
    case "deleteStep":
      const deleteStep = (task, id) => {
        task.steps = task.steps.filter(step => step.id !== id);
        task.progress = calcProgress(task);
        return task;
      };
      return tasks.map(task => {
        return task.id === rest.taskID ? 
          deleteStep(task, rest.stepID) : task
      });
    default:
      return tasks;
  }
}

function TaskList() {
  const [tasks, dispatch] = useReducer(reducer, getTasks());
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  return (
    <ol className="lane">
      <TaskContext.Provider value={dispatch}>
        {tasks.map(task => (
          <>
            <Task
              key={task.id}
              task={task} 
            />
            <progress max="100" value={task.progress}/>
          </>
        ))} 
        <TaskAdd/>
      </TaskContext.Provider>
    </ol>
  );
}

export default TaskList;
