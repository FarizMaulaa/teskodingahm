// import React from "react";
// import { FaUserAlt } from "react-icons/fa";

// function Login() {
//   return (
//     <div className="h-screen w-screen bg-gray-500">
//       <div className="p-5">
//         <div class="flex justify-center">
//           <div class="rounded-lg shadow-lg bg-white max-w-sm">
//             <div className="justify-center align-center items-center p-9">
//               <div className="text-5xl font-bold flex justify-center items-center mt-5">
//                 <FaUserAlt />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-bold mb-2">Login</h3>
//                 <p>Enter your email and password below</p>
//               </div>
//             </div>
//             <div className="p-4">
//               <div class="flex justify-center">
//                 <div class="mb-3 xl:w-96">
//                   <label
//                     for="exampleEmail0"
//                     class="form-label inline-block mb-2 text-gray-700"
//                   >
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     class="
//         form-control
//         block
//         w-full
//         px-3
//         py-2
//         text-base
//         font-normal
//         text-gray-700
//         bg-white bg-clip-padding
//         border border-solid border-gray-300
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//       "
//                     id="exampleEmail0"
//                     placeholder="Email address"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="p-4">
//               <div class="flex justify-center">
//                 <div class="mb-3 xl:w-96">
//                   <div className="space-x-0">
//                     <p
//                       for="examplePassword0"
//                       class="form-label inline-block mb-2 text-gray-700 "
//                     >
//                       Password
//                     </p>
//                   </div>

//                   <input
//                     type="password"
//                     class="
//         form-control
//         block
//         w-full
//         px-3
//         py-2
//         text-base
//         font-normal
//         text-gray-700
//         bg-white bg-clip-padding
//         border border-solid border-gray-300
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//       "
//                     id="examplePassword0"
//                     placeholder="Password input"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div class="p-6">
//               <div className="flex justify-center items-center">
//                 <p
//                   type="button"
//                   class=" inline-block px-[150px] py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//                 >
//                   Button
//                 </p>
//               </div>
//               <p className="text-center m-2">
//                 Dont have an account?{" "}
//                 <span className="text-blue-500 ">Sigh up</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
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

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-500 py-2 px-8 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
