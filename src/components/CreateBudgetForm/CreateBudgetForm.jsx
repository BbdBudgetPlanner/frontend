const CreateBudgetForm = () => {
    return (
        <div>
            <h3>Create Budget</h3>
            <label>Budget Name</label>
            <input
                type="text"
                placeholder="e.g. Groceries"
                required
            />
            <label>Amount</label>
            <input
                type="number"
                step="0.01"
                placeholder="e.g. R1250.00"
                required
                inputMode="decimal"
            />
            <button>Create Budget</button>
        </div>
    );
};

export default CreateBudgetForm;