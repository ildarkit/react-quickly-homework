import Number from './Number';

function TimeDisplay({time}) {
  return (
    <ul className="parts">
      <li className="part">
        <Number time={Math.trunc(time / 60)} timeUnit="minutes"/>
      </li>
      <li className="colon">:</li>
      <li className="part">
        <Number time={time % 60} timeUnit="seconds"/>
      </li>
    </ul>
  );
}

export default TimeDisplay;
