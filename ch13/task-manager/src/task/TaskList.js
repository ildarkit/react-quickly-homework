import {useReducer, useEffect} from "react";
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import TaskContext from "./TaskContext";
import initialState from "./fixture";

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || initialState;
}

function reducer(tasks, {type, ...rest}) {
  switch (type) {
    case "addTask":
      return tasks.concat({id: Math.random() * 1_000_000, steps: [], ...rest});
    case "editTask":
      const {id, title} = rest;
      return tasks.map(task => task.id === id ? {...task, title}: task);
    case "deleteTask":
      return tasks.filter(task => task.id !== rest.id);
    case "addStep":
      const addStep = (task, title) => {
        task.steps = task.steps.concat(
          {id: Math.random() * 1_000_000,
            title, 
            isDone: false
          }
        );
        return task;
      };
      return tasks.map(task => {
        return task.id === rest.taskID ?
          addStep(task, rest.title) : task;
      });
    case "editStep":
      const {stepID, taskID, ...props} = rest;
      const updateStep = step => {
        return step.id === stepID ?
          {...step, ...props} : step
      };
      return tasks.map(task => {
        return task.id === taskID ?
          {...task,
            steps: task.steps.map(step => updateStep(step))
          } : task
      });
    case "deleteStep":
      const deleteStep = (task, id) => {
        task.steps = task.steps.filter(step => step.id !== id);
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
          <Task
            key={task.id}
            task={task} 
          />
        ))} 
        <TaskAdd/>
      </TaskContext.Provider>
    </ol>
  );
}

export default TaskList;
