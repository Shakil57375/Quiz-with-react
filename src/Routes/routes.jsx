import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Pages/Home/Home";
import Results from "../Components/Pages/Results/Results";
import Register from "../Components/Pages/Register/Register";
import Login from "../Components/Pages/Login/Login";
import Videos from "../Components/Videos/Videos";
import Blogs from "../Components/Blogs/Blogs";
import Quiz from "../Components/Pages/Quiz/Quiz";

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
        path: "/video",
        element: <Videos />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element: <Results />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
