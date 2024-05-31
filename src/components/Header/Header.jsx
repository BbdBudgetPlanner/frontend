import { useNavigate } from "react-router-dom";
import logo from "../../assets/budget-logo.svg";

import "./Header.css"

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div onClick={() => {
                navigate("/");
            }} className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
                <h1 className="logo-text">Budget Planner</h1>
            </div>
            <button className="logout-button">Logout</button>
        </header>
    )
}

export default Header;