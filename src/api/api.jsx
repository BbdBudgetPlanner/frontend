const url = "...";

const getBudgetById = async (id) => {
    const response = await fetch(`${url}/api/usersbudget${id}`);
    const data = await response.json();
    return data;
}

const getBudgetByName = async (name) => {
    const response = await fetch(`${url}/api/budgetbyname/${name}`);
    const data = await response.json();
    return data;
}

const createBudget = async (userid, name, amount) => {
    const response = await fetch(`${url}/api/budget`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({userid, name, amount}),
    });
    const data = await response.json();
    return data;
}

const getAllCategories = async () => {
    const response = await fetch(`${url}/api/categories`);
    const data = await response.json();
    return data;
}

const getCategoryById = async (id) => {
    const response = await fetch(`${url}/api/category/${id}`);
    const data = await response.json();
    return data;
}

const createCategory = async (category) => {
    const response = await fetch(`${url}/api/category`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
}

const createExpenseItem = async (budgetid, categoryid, name, price) => {
    const response = await fetch(`${url}/api/expenseitem`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            budgetid,
            categoryid,
            name,
            price,
        }),
    });
    const data = await response.json();
    return data;
}

const getUserById = async (id) => {
    const response = await fetch(`${url}/api/users/${id}`);
    const data = await response.json();
    return data;
}