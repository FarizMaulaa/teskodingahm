import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Login() {
  return (
    <div className="h-screen w-screen bg-gray-500">
      <div className="p-5">
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <div className="justify-center align-center items-center p-9">
              <div className="text-5xl font-bold flex justify-center items-center mt-5">
                <FaUserAlt />
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">Login</h3>
                <p>Enter your email and password below</p>
              </div>
            </div>
            <div className="p-4">
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <label
                    for="exampleEmail0"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    class="
        form-control
        block
        w-full
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleEmail0"
                    placeholder="Email address"
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <div className="space-x-0">
                    <p
                      for="examplePassword0"
                      class="form-label inline-block mb-2 text-gray-700 "
                    >
                      Password
                    </p>
                  </div>

                  <input
                    type="password"
                    class="
        form-control
        block
        w-full
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="examplePassword0"
                    placeholder="Password input"
                  />
                </div>
              </div>
            </div>
            <div class="p-6">
              <div className="flex justify-center items-center">
                <p
                  type="button"
                  class=" inline-block px-[150px] py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Button
                </p>
              </div>
              <p className="text-center m-2">
                Dont have an account?{" "}
                <span className="text-blue-500 ">Sigh up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
