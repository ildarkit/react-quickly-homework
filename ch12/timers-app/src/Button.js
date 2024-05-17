function Button({icon, title, onClick}) {
  return (
    <button onClick={onClick} title={title} className="toggle">
      <img src={icon} alt={title} />
    </button>
  );
}

export default Button;
