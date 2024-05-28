import {Outlet, useLoaderData} from "react-router-dom";

export const mainLoader = () => {
    console.log("Home page loaded!");
    return null;
}

const Main = () => {
    return (
        <div>
            <h1>Main Layout</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Main