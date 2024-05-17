import Number from './Number';

function TimeDisplay() {
  return (
    <ul className="parts">
      <li className="part">
        <Number/>
      </li>
      <li className="colon">:</li>
      <li className="part">
        <Number/>
      </li>
    </ul>
  );
}

export default TimeDisplay;
