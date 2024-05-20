function Number({time, timeUnit}) {
  return (
    <li className="part">
      <p className="number">{String(time).padStart(2, "0")}</p>
      <p className="unit">{timeUnit}</p>
    </li>
  );
}

export default Number;
