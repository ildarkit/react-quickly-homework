import {useContext} from 'react';
import MenuItem from "./MenuItem";
import MenuContext from "./MenuContext";

function Menu() {
  const {login, items, profile} = useContext(MenuContext);
  const links = login ? items.concat(profile) : items;
  return (
    <nav>
      <ul className="menu">
        {links.map(
          ({title, ...props}) => (
            <MenuItem key={title} {...props}>
              {title}
            </MenuItem>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
