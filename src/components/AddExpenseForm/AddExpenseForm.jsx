import { useState } from "react";

import "./AddExpenseForm.css";

import { createExpenseItem } from "../../api/api.jsx"

const AddExpenseForm = ({ budgetName, categories, jwt, budgetId }) => {
    const [category, setCategory] = useState("");
    const [categoryId, setCategoryId] = useState(categories[0].id);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState();
    const [isCustomSelected, setIsCustomSelected] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const response = await createExpenseItem(jwt, budgetid, categoryId, name, amount);
        // console.log(response);
        console.log(categoryId);
        console.log("Expense Created");

    }

    return (
        <div className="expense-container">
            <h2 className="expense-header">Add New <span className="name-span">{budgetName}</span> Expense</h2>
            <form className="expense-form" onSubmit={handleSubmit}>
                <div className="expense-inputs-container">
                    <div className="expense-row">
                        <div className="expense-input-container">
                            <label className="expense-label">Expense Name</label>
                            <input
                                className="expense-input"
                                type="text"
                                placeholder="e.g. Eggs"
                                required
                                maxLength={128}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                        <div className="expense-input-container">
                            <label className="expense-label">Amount</label>
                            <input
                                className="expense-input"
                                type="number"
                                step="0.1"
                                min={1}
                                placeholder="e.g. R50.00"
                                required
                                inputMode="decimal"
                                onChange={(e) => { setAmount(e.target.value) }}
                            />
                        </div>
                    </div>

                    <div className="expense-row">
                        <div className="expense-input-container">
                            <label className="expense-label">Category</label>
                            <select
                                className="expense-select"
                                required
                                onChange={(e) => {
                                    const selectedCategory = categories.find(
                                        (categoryItem) => categoryItem.name === e.target.value
                                    )
                                    setCategory(e.target.value);
                                    setCategoryId(selectedCategory.id);
                                }}
                            >
                                {categories.map(
                                    (categoryItem, index) => {
                                        return (
                                            <option key={index} >
                                                {categoryItem.name}
                                            </option>
                                        );
                                    }
                                )}
                            </select>
                        </div>
                        {isCustomSelected && (
                            <div className="expense-input-container">
                                <label className="expense-label">Category Name</label>
                                <input
                                    className="expense-input"
                                    type="text"
                                    placeholder="e.g. Clothes"
                                    required
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="expense-button-container">
                    <button className="expense-button" type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
};

export default AddExpenseForm;
