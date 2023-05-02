import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<div className="pb-14 hero min-h-screen bg-white">
			<div className="hero-content flex-col lg:flex-row">
				<img
					src="https://i.ibb.co/ZKxqwWZ/about-7.jpg"
					className="md:max-w-2xl rounded-lg shadow-2xl mr-10"
				/>
				<div>
					<h1 className="text-5xl font-bold underline aboutTitle">ABOUT US</h1>
					<h4 className="py-6 aboutSub ">
						Welcome to Dina, a modern restaurant with a focus on premium food
						tastes
					</h4>
					<p className="aboutDes">
						We invite you to celebrate our restaurant's delicious recipes
						whether you are here for a business lunch or dinner. Discover new
						tastes and inspired recipes from all over the world.
					</p>
					<button className="about-btn">About Us</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
