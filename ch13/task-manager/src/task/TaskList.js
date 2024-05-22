import {useState, useEffect} from "react";
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import initialState from "./fixture";

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || initialState;
}

function TaskList() {
  const [tasks, setTask] = useState(getTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);
  const addTask = title => {
    setTask(tasks => tasks.concat(
      {id: Math.random() * 1_000_000, title}
    ));
  };
  const editTask = (id, title) => {
    setTask(tasks => {
      tasks.map(task => {
        task.id === id ? {...task, title}: task
      });
    });
  };
  const deleteTask = id => {
    setTask(tasks => {
      tasks.filter(task => task.id !== id);
    });
  };

  return (
    <ol className="lane">
      {tasks.map(task => (
        <Task
          key={task.id} 
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
