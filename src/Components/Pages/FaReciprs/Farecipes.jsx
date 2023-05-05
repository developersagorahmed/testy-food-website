import React from "react";
import FvCart from "../FvCart/FvCart";

const Farecipes = () => {
	const cardData = JSON.parse(localStorage.getItem("item"));
	if (cardData) {
		console.log(cardData);
	}

	return (
		<div>
			{cardData ? (
				<div className="container my-8 mx-auto ml-24 grid grid-cols-2">
					{cardData?.map((card, index) => (
						<FvCart key={index} data={card}></FvCart>
					))}
				</div>
			) : (
				<div className="w-[100vw] h-[50vh]">
					<h1 className="text-xl font-semibold flex justify-center text-black ">
						Add some recipe to your favorite Collection
					</h1>
				</div>
			)}
		</div>
	);
};

export default Farecipes;
