import React from "react";
import "./BestFood.css";

const BestFood = () => {
	return (
		<div>
			<h1 className="text-[80px] mx-auto text-center font-extrabold underline text-[#7CB342]">
				Best Recipes
			</h1>
			<div className="hero min-h-screen bg-transparent">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.ibb.co/dGXVC8N/mulan-sukrisno-NJw-FPHURw-NQ-unsplash-min.jpg"
						className="w-[550px] rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold text-[#7CB342]">
							Kung Pao Chicken (宫保鸡丁){" "}
						</h1>
						<p className="py-6 text-black">
							Kung Pao Chicken, also known as Gong Bao Chicken, is a classic
							Chinese dish that originated in the Sichuan province. This spicy
							and savory stir-fry is made with marinated chicken, peanuts, and
							vegetables such as bell peppers, onions, and scallions.
						</p>
						<button className="food-btn">Order Now</button>
					</div>
				</div>
			</div>
			<div className=" hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://i.ibb.co/FqbpKyc/farhad-ibrahimzade-Kp-Ol9j-V2a-JM-unsplash-min.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold text-[#7CB342]">
							Mapo Tofu (麻婆豆腐)
						</h1>
						<p className="py-6 text-black">
							Mapo Tofu is a popular and beloved Chinese dish that originated in
							the Sichuan province. The dish is named after its creator, a woman
							named Chen Mapo, who ran a small restaurant in the region. Mapo
							Tofu is made with soft tofu that is cooked in a spicy and aromatic
							sauce made with Sichuan peppercorns,
						</p>
						<button className="food-btn">Order Now</button>
					</div>
				</div>
			</div>
			<div className="hero min-h-screen bg-transparent">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.ibb.co/31DJ9X8/israel-albornoz-8iia-ALrj-R54-unsplash-min.jpg"
						className="w-[550px] rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold text-[#7CB342]">
							Hot and Sour Soup (酸辣汤){" "}
						</h1>
						<p className="py-6 text-black">
							Hot and Sour Soup is a popular Chinese soup that is known for its
							tangy and spicy flavors. The soup is believed to have originated
							in the Sichuan province, but is now enjoyed throughout China and
							around the world. Hot and Sour Soup is made with a flavorful broth
							that is typically made with chicken or pork stock, vinegar, and
							soy sauce.
						</p>
						<button className="food-btn">Order Now</button>
					</div>
				</div>
			</div>
			<div className=" hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://i.ibb.co/3Fx14dm/orijit-chatterjee-w-EBg-p-Ytynw-unsplash-min.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold text-[#7CB342]">
							Xiaolongbao (小笼包)
						</h1>
						<p className="py-6 text-black">
							Xiaolongbao, also known as soup dumplings, are a type of steamed
							bun that originated in the Jiangnan region of China. The dish is
							believed to have been invented in the early 19th century and has
							since become a staple of Chinese cuisine. Xiaolongbao are filled
							with ground meat, typically pork, and a savory broth that is
							created by adding gelatinized meat stock to the filling.
						</p>
						<button className="food-btn">Order Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestFood;
