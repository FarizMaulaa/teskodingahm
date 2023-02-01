import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    <div className="h-screen flex bg-gray-800">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <div className="text-5xl font-bold flex justify-center items-center mt-5">
          <FaUserAlt />
        </div>
        <div className="text-center mb-5">
          <h3 className="text-3xl font-bold mb-2">Login</h3>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>
          <div className="flex justify-center items-center mt-2">
            <p
              type="button"
              class=" inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </p>
          </div>

          <p className=" block text-center mt-8 mb-5">
            Dont have an account?
            <span className="text-blue-500 ">Sigh up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
