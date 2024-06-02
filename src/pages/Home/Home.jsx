import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";

import "./Home.css"

import image from "../../assets/image-3.svg";

import CreateBudgetForm from "../../components/CreateBudgetForm/CreateBudgetForm.jsx";
import BudgetCard from "../../components/BudgetCard/BudgetCard.jsx";

import { getAllBudgets } from "../../api/api.jsx"

export const homeLoader = async () => {
    // const session = await fetchAuthSession({forceRefresh: true});
    // const token = (session.tokens.accessToken.toString());
    // const userInfo = await getCurrentUser();
    // const username = userInfo.username;

    // // Get user's budgets below

    // return {jwt: token, username: username};
    return null;
}

const Home = () => {
    const [jwt, setJwt] = useState("");
    const [username, setUsername] = useState("");

    // const userCredentials = useLoaderData()
    const navigate = useNavigate();

    const testArray = [
        {
            id: 1,
            name: "January 2024",
            amount: 1250.00
        },
        {
            id: 2,
            name: "February 2024",
            amount: 150.00
        },
        {
            id: 3,
            name: "March 2024",
            amount: 12500.00
        },
        {
            id: 4,
            name: "April 2024",
            amount: 100.00
        },
        {
            id: 5,
            name: "May 2024",
            amount: 1250.00
        },
        {
            id: 6,
            name: "June 2024",
            amount: 1250.00
        },
        {
            id: 7,
            name: "July 2024",
            amount: 1250.00
        },
    ]

    // if (userCredentials.jwt === undefined) {
    //     navigate("/login");
    // }

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
                    // console.log(token);
                    // const data = await getAllBudgets(token);
                    // console.log("This is the category data: ", data);
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
                {jwt && <CreateBudgetForm jwt={jwt} userid={"1295c4e4-70f1-70ac-7132-836ef97a5416"} />}
                <img src={image} className="image" />
            </div>
            <div className="budgets-container">
                {testArray.map((budget, index) => {
                    if (jwt) {
                        return (
                            <BudgetCard jwt={jwt} key={index} name={budget.name} total={budget.amount} spent={750} button={true} />
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default Home;