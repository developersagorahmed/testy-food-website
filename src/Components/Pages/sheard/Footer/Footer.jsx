import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className=" footer footer-center p-10 bg-[#7CB342] text-base-content rounded">
			<div className="grid grid-flow-col gap-4">
				<li className="text-2xl list-none hover:underline">
					<Link to="/">Home</Link>
				</li>
				<li className="text-2xl list-none hover:underline">
					<Link to="/about">About</Link>
				</li>
				<li className="text-2xl list-none hover:underline">
					<Link to="/blog">Blog</Link>
				</li>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4">
					<a className="text-4xl hover:text-white">
						<FaTwitter></FaTwitter>
					</a>
					<a className="text-4xl hover:text-white">
						<FaYoutube></FaYoutube>
					</a>
					<a className="text-4xl hover:text-white">
						<FaFacebook></FaFacebook>
					</a>
				</div>
			</div>
			<div>
				<p className="text-base">
					Copyright © 2023 - All right reserved by Developer Sagor Ahmed
				</p>
			</div>
		</footer>
	);
};

export default Footer;
