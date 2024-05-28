import { useLoaderData, useNavigate } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm.jsx";

export const loginLoader = () => {
    console.log("Logged in!");
    return null;
}

const Login = () => {
    let navigate = useNavigate();

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Login