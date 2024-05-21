import {useState} from "react";
import Timer from "./Timer";
import NewTimer from "./NewTimer";

function TimerManager() {
  const [timerId, setTimerId] = useState(1);
  const [timers, setTimer] = useState([]);
  const handleDelete = timerId => {
    setTimer(timers.filter(timer => timer.timerId !== timerId));
  };
  const handleAdd = sec => {
    if (sec === 0) return;
    const timer = {
      timerId: timerId,
      startTime: sec,
    };
    setTimer(timers.concat(timer));
    setTimerId(timerId + 1);
  };
  return (
    <div className="timers">
      {timers.map(
        timer => <Timer key={timer.timerId} handleDelete={handleDelete} {...timer}/>
      )} 
      <NewTimer handleAdd={handleAdd}/>
    </div>
  );
}

export default TimerManager;
