import { useNavigate } from "react-router-dom";

import "./Home.css"

import image from "../../assets/image-3.svg";

import CreateBudgetForm from "../../components/CreateBudgetForm/CreateBudgetForm.jsx";
import BudgetCard from "../../components/BudgetCard/BudgetCard.jsx";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="create-container">
            <CreateBudgetForm />
            <img src={image} className="image" />
            </div>
            <div className="budgets-container">
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
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