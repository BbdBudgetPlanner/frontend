import { useNavigate } from "react-router-dom";

import "./Home.css"

import CreateBudgetForm from "../../components/CreateBudgetForm/CreateBudgetForm.jsx";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm.jsx";
import BudgetCard from "../../components/BudgetCard/BudgetCard.jsx";
import ExpensesList from "../../components/ExpensesList/ExpensesList.jsx";

const Home = () => {
    const navigate = useNavigate();

    const testArray = [
        { name: "Coffee", price: 125.00, category: "Food", date: "21/05/2024" },
        { name: "Biscuits", price: 45.00, category: "Food", date: "22/05/2024" },
        { name: "Sugar", price: 60.00, category: "Food", date: "22/05/2024" },
        { name: "Tea", price: 35.00, category: "Food", date: "23/05/2024" },
        { name: "Milk", price: 25.00, category: "Food", date: "23/05/2024" },
    ]

    return (
        <div>
            <div className="row-container">
            <CreateBudgetForm />
            <AddExpenseForm />
            </div>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00}/>
            <ExpensesList expenseList={testArray}/>
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