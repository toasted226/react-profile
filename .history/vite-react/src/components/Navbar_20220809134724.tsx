import "./Navbar.css";
import logo from "../assets/react.svg";

export default function Navbar(): JSX.Element {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" />
        </nav>
    );
}