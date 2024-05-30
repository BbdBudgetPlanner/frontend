import { useState } from "react";

import "./AddExpenseForm.css";

const AddExpenseForm = () => {
    const [category, setCategory] = useState("");
    const [isCustomSelected, setIsCustomSelected] = useState(false);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setCategory(selectedOption);

        if (selectedOption === "Add New...") {
            setIsCustomSelected(true);
        } else {
            setIsCustomSelected(false);
        }
    };

    return (
        <div className="expense-container">
            <h2 className="expense-header">Add New Expense</h2>
            <div className="expense-form">
                <div className="expense-inputs-container">
                    <div className="expense-row">
                        <div className="expense-input-container">
                            <label className="expense-label">Expense Name</label>
                            <input
                                className="expense-input"
                                type="text"
                                placeholder="e.g. Eggs"
                                required
                            />
                        </div>
                        <div className="expense-input-container">
                            <label className="expense-label">Amount</label>
                            <input
                                className="expense-input"
                                type="number"
                                step="0.1"
                                placeholder="e.g. R50.00"
                                required
                                inputMode="decimal"
                            />
                        </div>
                    </div>

                    <div className="expense-row">
                        <div className="expense-input-container">
                            <label className="expense-label">Category</label>
                            <select
                                className="expense-select"
                                required
                                onChange={handleSelectChange}
                            >
                                {["Groceries", "Studies", "Transport", "Add New..."].map(
                                    (budget, index) => {
                                        return (
                                            <option key={index} value={budget}>
                                                {budget}
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
                    <button className="expense-button">Add Expense</button>
                </div>
            </div>
        </div>
    );
};

export default AddExpenseForm;
