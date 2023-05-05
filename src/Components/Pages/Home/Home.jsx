import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCart from "../ChefCart/ChefCart";
import BestFood from "../BestFood/BestFood";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
	const data = useLoaderData();

	return (
		<>
			<div id="item4" className=" carousel-item w-full h-[80vh]">
				<div
					className="hero h-[80vh]"
					style={{
						backgroundImage: `url("https://i.ibb.co/HPmWd4z/wallpaperflare-com-wallpaper.jpg")`,
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-left text-neutral-content">
						<div className="max-w-xl">
							<h1 className="mb-5  text-6xl font-extrabold text-[yellow]">
								it's not just food,
								<span className=" text-[white] "> it's an experience</span>
							</h1>
							<button className="bg-[#7CB342] btn text-[#353535] text-lg font-bold btn-primary rounded-md">
								See More
							</button>
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-[80px] mx-auto text-center font-extrabold underline text-[#7CB342]">
				Our Chef
			</h1>
			<div className="md:container md:mx-auto md:mt-8 grid md:grid-cols-3 ">
				{data?.map((singleData) => (
					<ChefCart key={singleData.id} data={singleData}></ChefCart>
				))}
			</div>

			<BestFood></BestFood>

			<h1 className="mt-5 mb-5 text-center text-5xl font-bold underline  text-[#7CB342]">
				About Us
			</h1>
			<div className="pb-14 hero min-h-screen bg-white">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.ibb.co/ZKxqwWZ/about-7.jpg"
						className="md:max-w-2xl rounded-lg shadow-2xl mr-10"
					/>
					<div>
						<h1 className="text-5xl font-bold underline aboutTitle">
							ABOUT US
						</h1>
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
		</>
	);
};

export default Home;
