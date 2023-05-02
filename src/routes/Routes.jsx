import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layouts/Main";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/loginAndSignin/Login";
import Register from "../Components/Pages/loginAndSignin/Register/Register";
import Detail from "../Components/Pages/Details/Detail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("http://localhost:5000/"),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/:id",
				element: <Detail></Detail>,
				loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
			},
		],
	},
]);

export default router;
