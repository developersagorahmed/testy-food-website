import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleLogin = (event) => {
		event.preventDefault();
		if ((email, password)) {
			signIn(email, password)
				.then((result) => {
					const user = result.user;
					console.log(user);
					navigate(from, { replace: true });
					event.target.reset();
				})
				.catch((error) => setError(error.message));
		}
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<h2 className="mx-auto text-3xl font-bold underline text-[#7CB342]">
							Log in
						</h2>
						<p className="text-red-900">{error}</p>
						<div className="form-control">
							<span className="label-text">Email</span>

							<input
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="email"
								className="input input-bordered rounded-md"
								required
							/>
						</div>
						<div className="form-control">
							<span className="label-text">Password</span>

							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="password"
								className="input input-bordered rounded-md"
								required
							/>
							<Link className="text-blue" to="/register">
								<p>
									<span className="text-blue"> Forget Password?</span>
								</p>
							</Link>

							<a
								href="#"
								className="mt-3 text-base label-text-alt link link-hover"
							>
								<Link className="text-blue" to="/register">
									<p>
										Dont't have an Account
										<span className="text-blue"> Register</span>
									</p>
								</Link>
							</a>
						</div>
						<div className="form-control mt-6">
							<button className="rounded-md bg-[#7CB342] btn btn-primary">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
