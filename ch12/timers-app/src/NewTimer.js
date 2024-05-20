import {useState} from "react";
import Input from "./Input";
import Button from "./Button";

function NewTimer({handleAdd}) {
  const [min, setMinutes] = useState(5);
  const [sec, setSeconds] = useState(0);
  const onChangeMin = (event) => setMinutes(event.target.valueAsNumber);
  const onChangeSec = (event) => setSeconds(event.target.valueAsNumber);

  return (
    <form className="timer timer-new">
      <ul className="parts">
        <Input label="minutes" value={min} onChange={onChangeMin}/>
        <li className="colon">:</li>
        <Input label="seconds" value={sec} onChange={onChangeSec}/>
      </ul>
      <Button title="Play" icon="icon/play.svg" onClick={() => handleAdd(min * 60 + sec)}/>
    </form>
  );
}

export default NewTimer;
