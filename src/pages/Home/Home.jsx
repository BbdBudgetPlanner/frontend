import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";

import "./Home.css"

import image from "../../assets/image-3.svg";

import CreateBudgetForm from "../../components/CreateBudgetForm/CreateBudgetForm.jsx";
import BudgetCard from "../../components/BudgetCard/BudgetCard.jsx";

// import { getAllCategories } from "../../api/api.jsx"

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
            <CreateBudgetForm />
            <img src={image} className="image" />
            </div>
            <div className="budgets-container">
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            <BudgetCard name={"Groceries"} total={1000.00} spent={750.00} button={true}/>
            </div>
        </div>
    );
};

export default Home;