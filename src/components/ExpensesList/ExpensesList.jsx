import "./ExpensesList.css"

const ExpensesList = () => {
    const testArray = [
        { name: "Coffee", price: 125.00, category: "Food", date: "21/05/2024" },
        { name: "Biscuits", price: 45.00, category: "Food", date: "22/05/2024" },
        { name: "Sugar", price: 60.00, category: "Food", date: "22/05/2024" },
        { name: "Tea", price: 35.00, category: "Food", date: "23/05/2024" },
        { name: "Milk", price: 25.00, category: "Food", date: "23/05/2024" },
    ]

    return (
        <div className="expenses-container">
            <div className="expenses-list">
                <div className="list-row">
                    <div className="list-item" >
                        <h2>Name</h2>
                    </div>
                    <div className="list-item">
                        <h2>Price</h2>
                    </div>
                    <div className="list-item">
                        <h2>Category</h2>
                    </div>
                    <div className="list-item">
                        <h2>Date</h2>
                    </div>
                </div>
                {
                    testArray.map((expense, index) => (
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