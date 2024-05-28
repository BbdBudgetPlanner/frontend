import { useNavigate } from "react-router-dom";

import "./Home.css"

import CreateBudgetForm from "../../components/CreateBudgetForm/CreateBudgetForm.jsx";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm.jsx";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="row-container">
            <CreateBudgetForm />
            <AddExpenseForm />
            </div>
            <button onClick={() => {
                navigate("/login")
            }}>Login Page
            </button>
            <button onClick={() => {
                navigate("/signup")
            }}>Sign Up Page
            </button>
        </div>
    );
};

export default Home;