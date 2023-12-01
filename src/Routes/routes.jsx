import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Pages/Home/Home";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Quiz from "../Components/Pages/Quiz/Quiz";
import Results from "../Components/Pages/Results/Results";

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
        element: <SignUp />,
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
