function Number({time, timeUnit}) {
  return (
    <>
      <p className="number">{time}</p>
      <p className="unit">{timeUnit}</p>
    </>
  );
}

export default Number;
