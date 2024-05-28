import {useState} from "react";

import "./SignUpForm.css"
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <h2 className="signup-header">Sign Up</h2>
            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="Confirm Password"
                    value={password}
                    onChange={(e) => console.log("Do check")}
                    required
                />
                <button className="signup-button" type="submit">Sign Up</button>
                <button className="login-route" onClick={() => navigate("/login")}>Already have an account? Login</button>
            </form>
        </div>
    )
}

export default SignUpForm