function Number({time, timeUnit}) {
  return (
    <>
      <p className="number">{String(time).padStart(2, "0")}</p>
      <p className="unit">{timeUnit}</p>
    </>
  );
}

export default Number;
