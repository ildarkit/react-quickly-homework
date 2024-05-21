function Button({icon, alt, ...rest}) {
  return (
    <button {...rest}>
      <img src={`icons/${icon}.svg`} alt={alt}/>
    </button>
  );
}

export default Button;
