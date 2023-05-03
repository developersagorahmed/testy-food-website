import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";

const Header = () => {
	return (
		<div className="navbar sticky top-0 z-50 bg-[#7CB342]">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
						<li>
							<Link>Blog</Link>
						</li>
					</ul>
				</div>
				<a className="hidden md:block btn btn-ghost normal-case text-3xl">
					<span className="text-[#212121]">Testy </span>
					<span className="text-[#ffffff]">Food</span>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menuContainer menu menu-horizontal px-1">
					<li>
						<Link>Home</Link>
					</li>
					<li>
						<Link>About</Link>
					</li>
					<li>
						<Link>Blog</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="avatar mr-5">
					<div className="w-12 mt-3 rounded-full ring ring-primary ring-offset-base-100">
						<img src="https://i.ibb.co/q7wTcQ1/Whats-App-Image-2023-04-18-at-3-07-58-PM-2.jpg" />
					</div>
				</div>
				<Link to="/login">
					<button className="login-btn">
						{" "}
						<IoIosLogIn className="mr-2 mt-[6px] text-2xl"></IoIosLogIn> Login
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
