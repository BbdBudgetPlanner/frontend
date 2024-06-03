import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";

import "./Home.css"

import image from "../../assets/image-3.svg";

import CreateBudgetForm from "../../components/CreateBudgetForm/CreateBudgetForm.jsx";
import BudgetCard from "../../components/BudgetCard/BudgetCard.jsx";

import { getAllBudgets } from "../../api/api.jsx"

const Home = () => {
    const [jwt, setJwt] = useState("");
    const [username, setUsername] = useState("");
    const [userBudgets, setUserBudgets] = useState([]);

    // const userCredentials = useLoaderData()
    const navigate = useNavigate();

    const addBudget = (newBudget) => {
        setUserBudgets((prevUserBudgets) => [...prevUserBudgets, newBudget]);
    }

    useEffect(() => {
        const checkToken = async () => {
            try {
                const session = await fetchAuthSession({ forceRefresh: true });
                const token = session.tokens.accessToken.toString();
                if (token) {
                    const userCredentails = await getCurrentUser();
                    console.log("Session found: ", userCredentails.username);
                    setUsername(userCredentails.username);
                    setJwt(token);
                    console.log("This is the access token:\n", token);
                    const data = await getAllBudgets(token);
                    console.log("This is the budget data: ", data);
                    setUserBudgets(data);
                    // process data, show as budgetcards
                }
            } catch {
                navigate("/login");
            }
        };
        checkToken();
    }, []);

    // console.log("Logged in as: ", userCredentials.username);

    return (
        <div>
            <div className="create-container">
                {jwt && <CreateBudgetForm jwt={jwt} addBudget={addBudget} />}
                <img src={image} className="image" />
            </div>
            <div className="budgets-container">
                {userBudgets.map((budget, index) => {
                    if (jwt) {
                        return (
                            <BudgetCard jwt={jwt} key={index} id={budget.id} name={budget.name} total={budget.amount} spent={750} button={true} />
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default Home;