function Button({icon, title, ...rest}) {
  return (
    <button title={title} {...rest} className="toggle">
      <img src={`icons/${icon}.svg`} alt={title} />
    </button>
  );
}

export default Button;
