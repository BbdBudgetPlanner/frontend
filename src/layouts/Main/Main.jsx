import {Outlet, useLoaderData} from "react-router-dom";

import Header from "../../components/Header/Header.jsx"

export const mainLoader = () => {
    console.log("Home page loaded!");
    return null;
}

const Main = () => {
    return (
        <div>
            <Header logoutButton={true} />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Main