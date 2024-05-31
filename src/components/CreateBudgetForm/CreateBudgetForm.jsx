import "./CreateBudgetForm.css";

const CreateBudgetForm = () => {
    return (
        <div className="budget-container">
            <h2 className="budget-header">Create Budget</h2>
            <div className="budget-form">
                <div className="budget-inputs-container">
                    <div className="budget-input-container">
                        <label className="budget-label">Budget Name</label>
                        <input className="budget-input" type="text" placeholder="e.g. June 2024" required />
                    </div>
                    <div className="budget-input-container">
                        <label className="budget-label">Amount</label>
                        <input
                            className="budget-input"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="e.g. R1250.00"
                            required
                            inputMode="decimal"
                        />
                    </div>
                </div>
                <div className="budget-button-container">
                    <button className="budget-button">Create Budget</button>
                </div>
            </div>
        </div>
    );
};

export default CreateBudgetForm;
