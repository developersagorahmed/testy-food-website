import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className=" footer footer-center p-10 bg-[#7CB342] text-base-content rounded">
			<div className="grid grid-flow-col gap-4">
				<a className="link link-hover text-[22px] ml-3">About us</a>
				<a className="link link-hover text-[22px]">Contact</a>
				<a className="link link-hover text-[22px]">Jobs</a>
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
