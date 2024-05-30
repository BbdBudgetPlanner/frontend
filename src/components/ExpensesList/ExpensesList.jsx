import "./ExpensesList.css"

const ExpensesList = ({ expenseList }) => {

    return (
        <div className="expenses-container">
            <div className="expenses-list">
                <div className="list-row">
                    <div className="list-item" >
                        <h3>Name</h3>
                    </div>
                    <div className="list-item">
                        <h3>Price</h3>
                    </div>
                    <div className="list-item">
                        <h3>Category</h3>
                    </div>
                    <div className="list-item">
                        <h3>Date</h3>
                    </div>
                </div>
                {
                    expenseList.map((expense, index) => (
                        <div className="list-row" key={index}>
                            <div className="list-item">{expense.name}</div>
                            <div className="list-item">{expense.price}</div>
                            <div className="list-item">{expense.category}</div>
                            <div className="list-item">{expense.date}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExpensesList;