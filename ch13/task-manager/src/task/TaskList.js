import {useReducer, useEffect} from "react";
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import TaskContext from "./TaskContext";
import initialState from "./fixture";
import {
  addTask,
  editTask,
  deleteTask,
  addStep,
  editStep,
  deleteStep,
  priorityStep
} from "./taskCore";

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || initialState;
}

function reducer(tasks, {type, ...rest}) {
  switch (type) {
    case "addTask":
      return addTask(tasks, ...rest);
    case "editTask":
      return editTask(tasks, rest); 
    case "deleteTask":
      return deleteTask(tasks, rest);
    case "addStep": 
      return addStep(tasks, rest); 
    case "editStep":
      return editStep(tasks, rest); 
    case "deleteStep":
      return deleteStep(tasks, rest); 
    case "priorityStep": 
      return priorityStep(tasks, rest); 
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
