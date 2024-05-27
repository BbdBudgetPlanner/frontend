import {useState} from "react";

import "./LoginForm.css"
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="login-container">
            <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="login-button" type="submit">Login</button>
                <button className="sign-up-route" onClick={() => navigate("/signup")}>Don't have an account? Sign Up</button>
            </form>
        </div>
    )
}

export default LoginForm