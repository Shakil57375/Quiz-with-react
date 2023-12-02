import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Pages/Home/Home";
import Quiz from "../Components/Pages/Quiz/Quiz";
import Results from "../Components/Pages/Results/Results";
import Register from "../Components/Pages/Register/Register";
import Login from "../Components/Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element : <Results/>
      }
    ],
  },
]);

export default router;
