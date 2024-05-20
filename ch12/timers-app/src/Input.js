function Input({label, ...rest}) {
  return (
    <li className="part">
      <input className="number" type="number" {...rest} name={label} id={label}/>
      <label className="unit" htmlFor={label}>
        {[label.slice(0, 1).toUpperCase(), label.slice(1)].join("")}
      </label>
    </li>
  );
}

export default Input;
