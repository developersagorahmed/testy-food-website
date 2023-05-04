import React from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import "./Blog.css";

const Blog = () => {
	const ref = useRef();
	return (
		<div className="container ml-14 mx-auto  mb-12">
			<div className="print">
				<div className="sss">
					<div ref={ref} className="a">
						<h1 className="mb-7  text-[60px] mx-auto text-center font-extrabold underline text-[#7CB342]">
							Questions A<span className="text-[#353535]">nd Answer</span>
						</h1>
						<div className="grid grid-cols-2 gap-y-6">
							<div className="bg-[#7CB342] w-[550px] p-8  rounded-lg ">
								<h1 className="text-center text-2xl mb-7 font-extrabold">
									Differences between uncontrolled and controlled components.
								</h1>
								<p className="text-center text-lg font-semibold">
									In a software application, uncontrolled components are user
									interface elements whose state is managed by the browser,
									while controlled components have their state managed by the
									application. Uncontrolled components can be simpler to use but
									offer less control over the UI, while controlled components
									offer more control but require more programming to manage the
									state. The choice between the two types of components depends
									on the specific use case and requirements of the application
								</p>
							</div>
							<div className="w-[550px] p-8 bg-[#7CB342] rounded-lg ">
								<h1 className="text-center text-2xl mb-7 font-extrabold">
									How to validate React props using PropTypes ?
								</h1>
								<p className="text-center text-lg font-semibold">
									React is a JavaScript library that is widely used for building
									user interfaces. PropTypes is a feature in React that allows
									developers to validate the props that are passed to a
									component. Props are essentially parameters that are passed to
									a component, and PropTypes helps to ensure that these
									parameters are of the expected type and shape. To validate
									React props using PropTypes, developers can define the
									expected type and shape of the props in the component's
									propTypes property. This is typically done by importing the
									PropTypes library from the React package and defining the
									expected type and shape for each prop.
								</p>
							</div>
							<div className="w-[550px] p-8 bg-[#7CB342] rounded-lg ">
								<h1 className="text-center text-2xl mb-7 font-extrabold">
									Difference between nodejs and express js. ?
								</h1>
								<p className="text-center text-lg font-semibold">
									Node.js is a runtime environment that allows developers to run
									JavaScript code on the server side, while Express is a web
									framework built on top of Node.js that provides a set of tools
									and features for building web applications and APIs. In short,
									Node.js provides the foundation for building server-side
									applications in JavaScript, while Express provides a higher
									level of abstraction with a set of features and tools for
									building web applications and APIs.
								</p>
							</div>
							<div className="w-[550px] p-8 bg-[#7CB342] rounded-lg ">
								<h1 className="text-center text-2xl mb-7 font-extrabold">
									What is a custom hook, and why will you create a custom hook ?
								</h1>
								<p className="text-center text-lg font-semibold">
									A custom hook is a reusable function in React that allows
									developers to abstract away common logic and stateful behavior
									in components. Custom hooks are created to share stateful
									logic between different components, without having to
									duplicate the same code in each component. Custom hooks are
									typically used to handle common tasks such as data fetching,
									form handling, and state management, among others. By creating
									a custom hook, developers can encapsulate complex logic and
									reuse it across different components, making code more
									modular, reusable, and maintainable.
								</p>
							</div>
						</div>
					</div>
				</div>

				<ReactToPrint
					trigger={() => (
						<button className="hover:bg-[#7CB342] hover:text-[#353535] mt-9 mx-auto dwn-btn ">
							Download PDF
							<FaDownload className="mr-2 mt-[5px] text-2xl ml-1"></FaDownload>
						</button>
					)}
					content={() => ref.current}
				></ReactToPrint>
			</div>
		</div>
	);
};

export default Blog;
