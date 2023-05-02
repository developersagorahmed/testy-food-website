import React from "react";
import { Link } from "react-router-dom";
import "./ChefCart.css";

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
				<h2 className="card-title">
					{chef_name}
					<div className="badge badge-secondary">{rating}</div>
				</h2>
				<p>{bio}</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">{number_of_recipes}</div>
					<div className="badge badge-outline">{years_of_experience}</div>
				</div>
			</div>
			<Link className="mx-auto mb-8" to={`/details/${id}`}>
				<button className="chef-btn">View Details</button>
			</Link>
		</div>
	);
};

export default ChefCart;
