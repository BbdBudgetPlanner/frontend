import { useLoaderData, useNavigate } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";

const SignUp = () => {
    let navigate = useNavigate();

    return (
        <div>
            <SignUpForm />
        </div>
    )
}

export default SignUp