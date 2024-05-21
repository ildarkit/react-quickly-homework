function Input({label, ...rest}) {
  return (
    <li className="part">
      <input className="number" type="number" {...rest} name={label} id={label}/>
      <label className="unit" htmlFor={label}>
        {label}
      </label>
    </li>
  );
}

export default Input;
