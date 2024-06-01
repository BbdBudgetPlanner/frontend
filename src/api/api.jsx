const url = "...";

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

export const createBudget = async (token, userid, name, amount) => {
    const response = await fetch(`${url}/api/budget`, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
        body: JSON.stringify({userid, name, amount}),
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

export const createExpenseItem = async (token, budgetid, categoryid, name, price) => {
    const response = await fetch(`${url}/api/expenseitem`, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
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