import {useReducer, useEffect} from 'react';
import Button from "./Button";
import TimeDisplay from "./TimeDisplay";

function reducer(state, {type}) {
  switch (type) {
    case "TICK":
      return (state.counter === 0) ? {...state, isCounting: false}:
        {...state, counter: state.counter - 1};
    case "PLAYPAUSE":
      return (state.counter === 0) ? state: {...state, isCounting: !state.isCounting};
    case "RESTART":
      return {...state, counter: state.startTime, isCounting: false};
    default:
      return state;
  }
}

function Timer({timerId, startTime, handleDelete}) {
  const onDelete = () => handleDelete(timerId);
  const [timerState, dispatch] = useReducer(
    reducer,
    {startTime,
      counter: startTime,
      isCounting: false,
    }
  );
  
  useEffect(() => {
    if (!timerState.isCounting) return;
    const tick = () => dispatch({type: "TICK"});
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [timerState]);

  return (
    <section className={
      `timer ${timerState.isCounting ?
        "timer-ticking": timerState.counter === 0 ? "timer-ringing": ""}`
    }>
      <TimeDisplay time={timerState.counter}/>
      {!timerState.isCounting ? (
        <Button title="Play" icon="play" onClick={() => dispatch({type: "PLAYPAUSE"})}/>
      ) : (
        <Button title="Pause" icon="pause" onClick={() => dispatch({type: "PLAYPAUSE"})}/>
      )}
      <Button title="Restart" icon="restart" onClick={() => dispatch({type: "RESTART"})}/>
      <Button title="Trash" icon="trash" onClick={onDelete}/>
    </section>
  );
}

export default Timer;
