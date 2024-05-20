import {useState, useEffect} from 'react';
import Button from "./Button";
import TimeDisplay from "./TimeDisplay";

function Timer({startTime}) {
  const [counter, setCounter] = useState(startTime);
  const [isPlaying, setPlay] = useState(false);
  const onClick = () => setPlay(!isPlaying); 
  
  useEffect(() => {
    if (!isPlaying) return;
    const tick = () => {
      setCounter(c => {
        if (c === 0) {
          setPlay(!isPlaying);
          setCounter(startTime);
          return c;
        }
        return c - 1;
      });
    };
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [startTime, isPlaying]);

  return (
    <section className={
      `timer ${isPlaying ? "timer-ticking": counter === 0 ? "timer-ringing": ""}`
    }>
      <TimeDisplay time={counter}/>
      {!isPlaying ? (
        <Button title="Play" icon="play" onClick = {onClick}/>
      ) : (
        <Button title="Pause" icon="pause" onClick = {onClick}/>
      )}
    </section>
  );
}

export default Timer;
