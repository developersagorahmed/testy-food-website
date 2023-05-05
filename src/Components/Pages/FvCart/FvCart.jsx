import React from "react";

const FvCart = ({ data }) => {
	console.log(data);
	const { chef_name, recipe_img, recipe_name } = data;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={recipe_img} alt="Shoes" />
			</figure>
			<div className="ml-7 mt-6 justify-start ">
				<h1 className="text-xl font-bold">Chef Name : {chef_name}</h1>
			</div>
			<div className="card-body">
				<h2 className="card-title font-bold">Recipe Name : {recipe_name}</h2>
			</div>
		</div>
	);
};

export default FvCart;
