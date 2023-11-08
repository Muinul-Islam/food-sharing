import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Food from "../Pages/Food/Food";
import AddFoods from "../Pages/Home/AddFoods";
import AvailableFoods from "../Pages/Home/AvailableFoods";
import Error from "../Pages/Error/Error";
import PrivateRoutes from "./PrivateRoutes";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "foods/:id",
        element: <Food></Food>,
        loader: ({ params }) =>
          fetch(
            `https://community-food-sharing-server-seven.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: "availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "addFoods",
        element: (
          <PrivateRoutes>
            <AddFoods></AddFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageFoods",
        element: (
          <PrivateRoutes>
            <ManageFoods></ManageFoods>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://community-food-sharing-server-seven.vercel.app/foods"),
      },
    ],
  },
]);

export default router;
