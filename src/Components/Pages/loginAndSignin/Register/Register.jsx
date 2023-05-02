import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body">
						<h2 className="mx-auto text-3xl font-bold underline text-[#7CB342]">
							Registration
						</h2>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								name="email"
								type="text"
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
							<button className="bg-[#7CB342] btn btn-primary rounded-md">
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
