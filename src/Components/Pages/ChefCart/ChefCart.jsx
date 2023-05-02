import React from "react";
import { Link } from "react-router-dom";
import "./ChefCart.css";
import { FaHeart, FaHamburger, FaChessRook, FaStar } from "react-icons/fa";

const ChefCart = ({ data }) => {
	const {
		id,
		chef_picture,
		chef_name,
		likes,
		number_of_recipes,
		rating,
		years_of_experience,
		bio,
	} = data;
	return (
		<div className="mt-12 mb-12 card w-96 bg-base-100 shadow-xl">
			<figure>
				<img className="h-[280px]" src={chef_picture} alt="chef picture" />
			</figure>
			<div className="card-body">
				<h2 className="card-title font-bold"> {chef_name}</h2>
				<p>{bio}</p>
				<div className="flex space-x-">
					<div className=" mt-5">
						<div className="">
							<div className="flex">
								<div>
									<div className="flex">
										<FaHamburger className="text-[25px] mt-[2px] text-[#7CB342]"></FaHamburger>
										<p className="font-bold ml-2 text-[#353535] text-lg">
											Recipes {number_of_recipes}
										</p>
									</div>
									<div className="flex mt-4">
										<FaChessRook className="text-[#7CB342] text-[25px] mt-[2px]"></FaChessRook>
										<p className="font-bold ml-2 text-[#353535] text-lg">
											{" "}
											{years_of_experience} Year of experience
										</p>
									</div>
								</div>

								<div className="flex ml-10">
									<FaHeart className="mr-[4px] text-[25px] mt-[2px] text-[#a50202]"></FaHeart>
									<p className="font-bold text-[#353535]">{likes}</p>
								</div>
							</div>
							<div className="flex mt-6 ml-2">
								<p className=" text-[20px] font-bold text-[#353535]">
									Rating {rating}
								</p>
								<p className="ml-0 flex text-[25px]">
									<FaStar></FaStar>
									<FaStar></FaStar>
									<FaStar></FaStar>
									<FaStar></FaStar>
									<FaStar></FaStar>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link className="mx-auto mb-8" to={`/details/${id}`}>
				<button className="chef-btn"> View Details</button>
			</Link>
		</div>
	);
};

export default ChefCart;
