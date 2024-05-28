const AddExpenseForm = () => {
    return (
        <div>
            <h3>Add New Expense</h3>
            <label>Expense Name</label>
            <input
                type="text"
                placeholder="e.g. Eggs"
                required
            />
            <label>Amount</label>
            <input
                type="number"
                step="0.1"
                placeholder="e.g. R50.00"
                required
                inputMode="decimal"
            />
            <select required>
                {
                    ["Groceries", "Studies", "Transport"].map((budget, index) => {
                        return (
                            <option key={index} value={budget}>{budget}</option>
                        )
                    })
                }
            </select>
            <button>Add Expense</button>
        </div>
    );
};

export default AddExpenseForm;