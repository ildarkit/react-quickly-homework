import {useState, useContext} from 'react';
import MenuContext from "./MenuContext";
import HeaderMenu from "./HeaderMenu";

function Main() {
  const data = useContext(MenuContext);
  const [isVisible, setVisible] = useState(data.login);
  const handlerLogin = () => {
    data.login = !data.login;
    setVisible(data.login);
  };
  return ( 
    <>
      <HeaderMenu/>
      <main>
        <h1>Welcome to this website</h1>
        <button onClick={handlerLogin}>
          {isVisible ? "Logout": "Login"}
        </button>
      </main>
    </>
  );
}

export default Main;
