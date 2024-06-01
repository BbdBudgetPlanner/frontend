import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Main, { mainLoader } from "./layouts/Main/Main.jsx";
import Home, { homeLoader } from "./pages/Home/Home.jsx";
import Budget, { budgetLoader } from "./pages/Budget/Budget.jsx";
import Login, { loginLoader } from "./pages/Login/Login.jsx"
import SignUp from "./pages/SignUp/SignUp.jsx";
import Error from "./pages/Error/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader: mainLoader,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader,
                errorElement: <Error />,
            },
            {
                path: "budget/:id",
                element: <Budget />,
                loader: budgetLoader,
                errorElement: <Error />,
            },
        ]
    },
    {
        path: "login",
        index: true,
        element: <Login />,
        loader: loginLoader,
    },
    {
        path: "signup",
        index: true,
        element: <SignUp />,
    }
]);

function App() {

  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
  )
}

export default App
