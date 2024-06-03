const url = process.env.REACT_APP_ENDPOINT_URL;

export const getAllBudgets = async (token) => {
    const response = await fetch(`${url}/api/usersbudgets`, {
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    return data;
}

export const getAllExpenses = async (token, budgetid) => {
    const response = await fetch(`${url}/api/getitems?budgetid=${budgetid}`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    return data;
}

export const getBudgetById = async (token, id) => {
    const response = await fetch(`${url}/api/usersbudget/${id}`, {
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    return data;
}

export const getBudgetByName = async (token, name) => {
    const response = await fetch(`${url}/api/budgetbyname/${name}`, {
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    return data;
}

export const createBudget = async (token, name, amount) => {
    const response = await fetch(`${url}/api/budget`, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
        body: JSON.stringify({name, amount}),
    });
    const data = await response.json();
    return data;
}

export const getAllCategories = async (token) => {
    const response = await fetch(`${url}/api/categories`, {
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    return data;
}

export const getCategoryById = async (token, id) => {
    const response = await fetch(`${url}/api/category/${id}`, {
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    return data;
}

export const createCategory = async (token, category) => {
    const response = await fetch(`${url}/api/category`, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
        body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
}

export const createExpenseItem = async (token, budgetId, categoryId, name, price) => {
    const response = await fetch(`${url}/api/expenseitem`, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
        body: JSON.stringify({
            budgetId,
            categoryId,
            name,
            price,
        }),
    });
    const data = await response.json();
    return data;
}