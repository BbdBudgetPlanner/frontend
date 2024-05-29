import "./ExpensesList.css"

const ExpensesList = () => {
    const testArray = [
        {name: "Coffee", price: 125.00, date: "21/05/2024"},
        {name: "Biscuits", price: 45.00, date: "22/05/2024"},
        {name: "Sugar", price: 60.00, date: "22/05/2024"},
        {name: "Tea", price: 35.00, date: "23/05/2024"},
        {name: "Milk", price: 25.00, date: "23/05/2024"},
    ]

    return (
        <div>
            <h2>Expenses List:</h2>
            {
                testArray.map((expense, index) => (
                    <div className="list-row" key={index}>
                        <div>{expense.name}</div>
                        <div>{expense.price}</div>
                        <div>{expense.date}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ExpensesList;