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
    const [budgetExpenses, setBudgetExpenses] = useState([]);

    const id = useLoaderData();

    const location = useLocation();
    const { jwt, name, total, spent } = location.state;

    const addExpense = (newExpense) => {
        setBudgetExpenses((prevBudgetExpenses) => [...prevBudgetExpenses, newExpense]);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                await getAllExpenses(jwt, id).then((response) => {
                    console.log(response);
                    setBudgetExpenses(response);
                })
                await getAllCategories(jwt).then((categories) => {
                    setCategoryArray(categories);
                })
            } catch (error) {
                console.log(error.message);
            }
        };
        getData();
    }, []);

    return (
        <div className="budget-page-container">
            <div className="budget-header-container">
                <h2><span id="budget-name">{name}</span> Budget</h2>
                <button className="delete-button">Delete Budget</button>
            </div>
            <div className="budget-cards-container">
                <div className="budget-card-container">
                    <BudgetCard name={name} total={total} spent={spent} button={false} />
                </div>
                <div className="budget-card-container">
                    {categoryArray && <AddExpenseForm budgetName={name} categories={categoryArray} jwt={jwt} budgetId={id} addExpense={addExpense} />}
                </div>
            </div>
            <div className="budget-list-container">
                <ExpensesList expenseList={budgetExpenses} />
            </div>
        </div>
    )
}

export default Budget;