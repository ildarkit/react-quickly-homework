import Button from "./Button";
import TimeDisplay from "./TimeDisplay";

function Timer({startTime}) {
  return (
    <section className="timer">
      <TimeDisplay/>
      <Button/>
    </section>
  );
}

export default Timer;
