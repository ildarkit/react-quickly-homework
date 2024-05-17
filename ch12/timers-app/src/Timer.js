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
          return c;
        }
        return c - 1;
      });
    };
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [startTime, isPlaying]);

  return (
    <section className="timer">
      <TimeDisplay time={counter}/>
      {!isPlaying ? (
        <Button title="Play" icon="icons/play.svg" onClick = {onClick}/>
      ) : (
        <Button title="Pause" icon="icons/pause.svg" onClick = {onClick}/>
      )}
    </section>
  );
}

export default Timer;
