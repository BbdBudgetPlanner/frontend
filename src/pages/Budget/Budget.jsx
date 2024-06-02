import { useLoaderData, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Budget.css";

import ExpensesList from "../../components/ExpensesList/ExpensesList.jsx";
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm.jsx";

import { getAllExpenses, getAllCategories } from "../../api/api.jsx"

export const budgetLoader = ({ params }) => {
    console.log(params.id);
    return params.id;
}

const Budget = () => {
    const [categoryArray, setCategoryArray] = useState();

    const id = useLoaderData();

    const location = useLocation();
    const { jwt, total, spent } = location.state;

    const testArray = [
        { name: "Coffee", price: 125.00, category: "Food", date: "21/05/2024" },
        { name: "Biscuits", price: 45.00, category: "Food", date: "22/05/2024" },
        { name: "Sugar", price: 60.00, category: "Food", date: "22/05/2024" },
        { name: "Tea", price: 35.00, category: "Food", date: "23/05/2024" },
        { name: "Milk", price: 25.00, category: "Food", date: "23/05/2024" },
    ]

    useEffect(() => {
        const getData = async () => {
            try {
                // const expenses = await getAllExpenses(jwt);
                await getAllCategories(jwt).then((categories) => {
                    setCategoryArray(categories);
                })
                // setCategoryArray(categories);
            } catch (error) {
                console.log(error.message);
            }
        };
        getData();
    }, []);

    return (
        <div className="budget-page-container">
            <div className="budget-header-container">
                <h2><span id="budget-name">{id}</span> Budget</h2>
                <button className="delete-button">Delete Budget</button>
            </div>
            <div className="budget-cards-container">
                <div className="budget-card-container">
                    <BudgetCard name={id} total={total} spent={spent} button={false} />
                </div>
                <div className="budget-card-container">
                    {categoryArray && <AddExpenseForm budgetName={id} categories={categoryArray} jwt={jwt} budgetId={"1"} />}
                </div>
            </div>
            <div className="budget-list-container">
                <ExpensesList expenseList={testArray} />
            </div>
        </div>
    )
}

export default Budget;