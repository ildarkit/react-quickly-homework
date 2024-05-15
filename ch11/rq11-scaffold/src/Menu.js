import MenuItem from "./MenuItem";

function Menu({items}) {
  return (
    <nav>
      <ul className="menu">
        {items.map(
          item => (
            <MenuItem href={item.href} icon={item.icon}>
              {item.title}
            </MenuItem>
        ))} 
      </ul>
    </nav>
  );
}

export default Menu;
