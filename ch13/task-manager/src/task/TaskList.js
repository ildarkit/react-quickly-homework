import {useState, useEffect} from "react";
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import initialState from "./fixture";

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || initialState;
}

function TaskList() {
  const [tasks, setTasks] = useState(getTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);
  const addTask = title => {
    setTasks(tasks => tasks.concat(
      {id: Math.random() * 1_000_000, title}
    ));
  };
  const editTask = (id, title) => {
    setTasks(tasks => tasks.map(task => (
      task.id === id ? {...task, title}: task
    )));
  };
  const deleteTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <ol className="lane">
      {tasks.map(task => (
        <Task
          key={task.id} 
          taskID={task.id}
          title={task.title} 
          editTask={editTask} 
          deleteTask={deleteTask}
        />
      ))} 
      <TaskAdd addTask={addTask}/>
    </ol>
  );
}

export default TaskList;
