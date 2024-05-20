import Number from './Number';

function TimeDisplay({time}) {
  return (
    <ul className="parts">
      <Number time={Math.trunc(time / 60)} timeUnit="minutes"/>
      <li className="colon">:</li>
      <Number time={time % 60} timeUnit="seconds"/>
    </ul>
  );
}

export default TimeDisplay;
