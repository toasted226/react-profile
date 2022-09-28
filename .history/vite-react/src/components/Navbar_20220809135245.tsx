import "./Navbar.css";
import logo from "../assets/react.svg";

export default function Navbar(): JSX.Element {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}