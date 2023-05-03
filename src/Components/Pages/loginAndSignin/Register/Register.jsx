import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleForm = (event) => {
		console.log(email);
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleForm} className="card-body">
						<h2 className="mx-auto text-3xl font-bold underline text-[#7CB342]">
							Registration
						</h2>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								name="email"
								type="email"
								placeholder="email"
								className="input input-bordered rounded-md"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								name="password"
								type="password"
								placeholder="password"
								className="input input-bordered rounded-md"
							/>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Re Type Password</span>
								</label>
								<input
									name="password"
									type="password"
									placeholder="password"
									className="input input-bordered rounded-md"
								/>
							</div>
							<label className="label">
								<a
									href="#"
									className="mt-3 text-base label-text-alt link link-hover"
								>
									<Link className="text-blue" to="/login">
										<p>
											Already have an Account
											<span className="text-blue"> Login</span>
										</p>
									</Link>
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button
								type="submit"
								name="submit"
								className="bg-[#7CB342] btn btn-primary rounded-md"
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
