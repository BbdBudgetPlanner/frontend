import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Main, { mainLoader } from "./layouts/Main/Main.jsx";
import Home from "./pages/Home/Home.jsx";
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
        ]
    },
]);

function App() {

  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
  )
}

export default App
