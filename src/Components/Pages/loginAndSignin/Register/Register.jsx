import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

import { updateProfile } from "firebase/auth";

const Register = () => {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");
	const [name, setName] = useState("");
	const { registerUser } = useContext(AuthContext);
	const navigate = useNavigate();
	// const location = useLocation();
	// const from = location.state?.from?.pathname || "/";

	const handleRegister = (event) => {
		event.preventDefault();
		if (password.length < 6) {
			setError("Password mush be 6 characters");
			return;
		}
		setError("");
		if ((photo, email, password)) {
			registerUser(email, password)
				.then((result) => {
					const currentUser = result.user;
					updateProfile(currentUser, { displayName: name, photoURL: photo });
					setError("");
					event.target.reset();
					navigate("/");
				})
				.catch((err) => {
					setError(err.message);
				});
		}
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
						<h2 className="mx-auto text-3xl font-bold underline text-[#7CB342]">
							Registration
						</h2>

						<p className="text-red-800">{error}</p>
						<div className="form-control">
							Your Name
							<input
								onChange={(e) => setName(e.target.value)}
								name="text"
								type="text"
								placeholder="Your Name"
								className="input input-bordered rounded-md"
							/>
						</div>
						<div className="form-control">
							Email
							<input
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								type="email"
								placeholder="email"
								className="input input-bordered rounded-md"
							/>
						</div>
						<div className="form-control">
							Password
							<input
								onChange={(e) => setPassword(e.target.value)}
								name="password"
								type="password"
								placeholder="password"
								className="input input-bordered rounded-md"
							/>
							<div className="form-control">
								Photo URL
								<input
									onChange={(e) => setPhoto(e.target.value)}
									name="text"
									type="text"
									placeholder="Photo URL"
									className="input input-bordered rounded-md"
								/>
							</div>
							<Link
								to="/login"
								className="mt-3 text-base label-text-alt link link-hover"
							>
								<p className="text-blue" to="/login">
									Already have an Account
									<span className="text-blue"> Login</span>
								</p>
							</Link>
						</div>

						<div className="form-control mt-6">
							<button
								type="submit"
								name="submit"
								className="bg-[#7CB342] btn text-black font-bold btn-primary rounded-md"
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
