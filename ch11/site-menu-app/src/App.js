import Main from "./Main";
import MenuContext from "./MenuContext";
import "./style.css";

function App() {
  const items = [
    {href: "/", icon: "home", title: "Home"},
    {href: "/services", icon: "services", title: "Services"},
    {href: "/pricing", icon: "pricing", title: "Pricing"},
    {href: "/blog", icon: "blog", title: "Blog"},
  ];
  const data = {
    login: false,
    items,
    profile: {href: "/profile", icon: "profile", title: "Profile"},
  };
  return (
    <MenuContext.Provider value={data}> 
      <Main/>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </MenuContext.Provider>
  );
}

export default App;
