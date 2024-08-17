/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import woman from "../assets/login.svg";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", values);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white h-full ">
      <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-md object"
            src={woman}
            alt="woman"
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-gray-100">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Login
          </h2>
          <p className="mt-2 mb-8 text-base text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </a>
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full p-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="username" className="mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="p-2 border-b-2 focus:outline-none focus:border-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="p-2 border-b-2 focus:outline-none focus:border-gray-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="p-2 border-b-2 focus:outline-none focus:border-gray-400"
                />
              </div>
              <div>
                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </a>
              </div>
            </div>
            <button className="bg-black text-white w-full mt-6 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
