import {useState} from "react";
import Input from "./Input";
import Button from "./Button";

function NewTimer({handleAdd}) {
  const [min, setMinutes] = useState(5);
  const [sec, setSeconds] = useState(0);
  const onChangeMin = (event) => setMinutes(
    Number(event.target.value.slice(-2))
  );
  const onChangeSec = (event) => setSeconds(
    Number(event.target.value.slice(-2))
  );
  const onSubmit = (event) => {
    event.preventDefault();
    handleAdd(min * 60 + sec);
  };
  return (
    <form className="timer timer-new" onSubmit={onSubmit}>
      <ul className="parts">
        <Input label="minutes" value={String(min).padStart(2, "0")} onChange={onChangeMin}/>
        <li className="colon">:</li>
        <Input label="seconds" value={String(sec).padStart(2, "0")} onChange={onChangeSec}/>
      </ul>
      <Button title="Play" icon="play"/>
    </form>
  );
}

export default NewTimer;
