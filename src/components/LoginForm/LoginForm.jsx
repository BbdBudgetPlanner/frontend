import { useState } from "react";
import { Amplify } from "aws-amplify";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { signIn } from "aws-amplify/auth";
import { getCurrentUser } from "aws-amplify/auth";
import { fetchAuthSession } from "aws-amplify/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn({
        username: email,
        password: password,
      });
      const session = await fetchAuthSession();
      //This is jwt
      console.log(session.tokens.accessToken.toString());

      const token = session.tokens.accessToken.toString();
      if (token) {
        navigate("/");
      }
      else {
        setError("Encountered an error logging in");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setError(
        error.message
      );
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
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
        {error && <p className="error-text">{error}</p>}
        <button className="login-button" type="submit">
          Login
        </button>
        <button
          className="sign-up-route"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
