import logo from "../../assets/budget-logo.svg";

import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
                <h1 className="logo-text">Budget Planner</h1>
            </div>
            <button className="logout-button">Logout</button>
        </header>
    )
}

export default Header;