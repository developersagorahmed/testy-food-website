import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layouts/Main";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/loginAndSignin/Login";
import Register from "../Components/Pages/loginAndSignin/Register/Register";
import Detail from "../Components/Pages/Details/Detail";
import PrivateRoute from "../Components/Provider/PrivateRoute";
import Blog from "../Components/Pages/Blog/Blog";
import Error from "../Components/Pages/Error/Error";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import Farecipes from "../Components/Pages/FaReciprs/Farecipes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () =>
					fetch(
						"https://assignment-10-testy-food-server-developersagorahmed.vercel.app"
					),
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
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/about",
				element: <AboutUs></AboutUs>,
			},
			{
				path: "fav",
				element: <Farecipes></Farecipes>,
			},
			{
				path: "/:id",
				element: (
					<PrivateRoute>
						<Detail></Detail>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://assignment-10-testy-food-server-developersagorahmed.vercel.app/${params.id}`
					),
			},
		],
	},
]);

export default router;
