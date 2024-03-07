import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import "./Header.css";

function Header() {
  // const color = "black";
  console.log(import.meta.env);
  return (
    <header
      className="Header"
      // style={{ "--color": color }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
}

export default Header;
