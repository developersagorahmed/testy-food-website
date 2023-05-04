import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Details.css";
import { FaHeart } from "react-icons/fa";
import { FaHamburger, FaChessRook } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import FoodCart from "../FoodCart/FoodCart";
import LazyLoad from "react-lazy-load";

const Detail = () => {
	const data = useLoaderData();
	const {
		chef_name,
		chef_picture,
		bio,
		id,
		likes,
		number_of_recipes,
		rating,
		recipes,
		years_of_experience,
	} = data[0];
	console.log(data);
	return (
		<div>
			<h1 className="mt-5 mb-5 text-center text-5xl font-bold underline  text-[#7CB342]">
				Chef Details
			</h1>
			<div className="mb-6 pb-6 chef-cart  mx-auto">
				<div className="bg-[#353535] text-white card lg:card-side shadow-xl">
					<figure>
						<img
							className="w-full h-[400px] rounded-xl ml-6"
							src={chef_picture}
							alt="Album"
						/>
					</figure>

					<div className="w-8/12 card-body">
						<h2 className="text-3xl underline card-title text-[#7CB342]">
							{chef_name}
						</h2>
						<p className="mt-6 grow-0 mb-5 ">{bio}</p>
						<div className="">
							<div className="flex justify-items-start ">
								<div className="flex ">
									<FaHamburger className="text-[25px] mt-[2px] text-[#7CB342]"></FaHamburger>
									<p className="font-bold ml-2 text-white text-lg ">
										Recipes {number_of_recipes}
									</p>
								</div>

								<div className="flex ml-[300px] ">
									<FaChessRook className="text-[#7CB342] text-[25px] "></FaChessRook>
									<p className="font-bold ml-2 text-white text-lg">
										{years_of_experience} Year of experience
									</p>
								</div>
							</div>

							<div className="mt-12 flex ">
								<div className="flex mr-[300px]">
									<FaHeart className="mr-[4px] text-[25px] text-[#a50202]"></FaHeart>
									<p className="grow-0 font-bold text-white">{likes} Likes</p>
								</div>

								<div className="flex   ">
									<p className="mr-3 font-bold ml-2 text-white text-lg">
										Rating {rating}
									</p>
									<Rating style={{ maxWidth: 120 }} value={rating} readOnly />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="mt-5 mb-5 text-center text-5xl font-bold underline  text-[#7CB342]">
					Recipes Details
				</h1>
				{recipes?.map((single) => (
					<FoodCart key={single.recipe_name} data={single}></FoodCart>
				))}
			</div>
		</div>
	);
};

export default Detail;
