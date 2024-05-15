import Menu from "./Menu";
import MenuContext from "./MenuContext";
import "./style.css";

function App() {
  const items = [
    {href: "/", icon: "home", title: "Home"},
    {href: "/services", icon: "services", title: "Services"},
    {href: "/pricing", icon: "pricing", title: "Pricing"},
    {href: "/blog", icon: "blog", title: "Blog"}
  ];
  return (
    <MenuContext.Provider value={items}>
      <header>
        <Menu/>
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </MenuContext.Provider>
  );
}

export default App;
