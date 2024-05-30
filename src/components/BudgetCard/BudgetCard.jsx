import "./BudgetCard.css";

const BudgetCard = ({ name, total, spent }) => {
    let remaining = total - spent;
    let progress = spent / total;

    return (
        <div className="card-container">
            <div className="card-text">
                <h3 className="card-heading">{name}</h3>
                <span className="card-total">R{total} Budgeted</span>
            </div>
            <div className="card-bar">
                <progress className="progress-bar" value={progress} />
            </div>
            <div className="card-amounts">
                <span className="card-amount">R{spent} spent</span>
                <span className="card-amount">R{remaining} remaining</span>
            </div>
            <div className="card-button">
                <button className="card-button-text">View More</button>
            </div>
        </div>
    )
}

export default BudgetCard; 