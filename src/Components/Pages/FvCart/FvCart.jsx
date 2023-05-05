import React from "react";

const FvCart = ({ data }) => {
	console.log(data);
	const { chef_name, recipe_img, recipe_name } = data;
	return (
		<div className="mb-10 py-5 card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={recipe_img} alt="Shoes" />
			</figure>
			<div className="ml-7 mt-6 justify-start ">
				<h1 className="text-xl font-bold">Chef Name : {chef_name}</h1>
			</div>
			<div className="card-body">
				<h2 className="card-title font-bold">Recipe Name : {recipe_name}</h2>
			</div>
			<button className="bg-red-200 btn w-6/12 mx-auto text-black hover:text-white">
				Remove recipe
			</button>
		</div>
	);
};

export default FvCart;
