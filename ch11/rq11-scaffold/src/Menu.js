import {useContext} from 'react';
import MenuItem from "./MenuItem";
import MenuContext from "./MenuContext";

function Menu() {
  const items = useContext(MenuContext);
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
