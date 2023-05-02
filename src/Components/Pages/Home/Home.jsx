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
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-5xl font-bold text-[#6eb91d]">
								Grilled Meat Ribs
							</h1>
							<p className="mb-5 text-base text-white">
								Grilled meat ribs are a popular dish enjoyed around the world.
								Typically made from pork, beef, or lamb ribs, they are seasoned
								with various spices, marinated, and then cooked over an open
								flame or on a grill until the meat is tender and juicy.
							</p>
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

			<AboutUs></AboutUs>
		</>
	);
};

export default Home;
