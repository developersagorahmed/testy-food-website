import React from "react";
import { FaHeart } from "react-icons/fa";
import "./FoodCart.css";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
const FoodCart = ({ data }) => {
	console.log(data);
	const { recipe_name, recipe_img, ingredients, cooking_method, rating } = data;
	return (
		<div>
			<div className="mt-5 mb-10 chef-cart container mx-auto">
				<div className="bg-[#353535] text-white card lg:card-side shadow-xl">
					<figure>
						<img
							className="w-full h-[400px] rounded-xl ml-6"
							src={recipe_img}
							alt="recipe image"
						/>
					</figure>
					<div className="w-8/12 card-body">
						<h2 className="text-3xl underline card-title text-[#7CB342]">
							{recipe_name}
						</h2>
						<div className="mt-6">
							<h2 className="font-semibold text-lg underline">Ingredients</h2>
							{ingredients?.map((grad) => (
								<li key={grad.index}>{grad}</li>
							))}
						</div>
						<p className=" grow-0 mb-5 ">{cooking_method}</p>
						<div>
							<Rating style={{ maxWidth: 120 }} value={rating} readOnly />
						</div>
						<div className=" card-actions justify-end ">
							<button className=" text-red-900 chef-details-btn">
								<FaHeart className="mr-2 mt-2 text-red-900"></FaHeart> Favourite
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCart;
