import React from "react";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import vector from "../../public/Vector.png";
import loginimg from "../../public/Rectangle 21.png";

function Login() {
  return (
    <div className="pt-24 px-24">
      <div>
        <Title titlename="Login" />
      </div>
      <div className="flex flex-row justify-center px-8">
        <div className="bg-gray-100 w-[45%] h-[750px] rounded-l-md">
          <div className="flex m-10 items-center">
            <img src={vector} alt="" />
            <p className="ml-5 font-semibold text-3xl">
              Let's learn and build <br /> something great!
            </p>
          </div>
          <div className="ml-10">
            <form action="">
              <div className="mb-5">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="w-[95%] rounded-md p-3"
                  placeholder="enter your email"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  name="Password"
                  id="password"
                  className="w-[95%] rounded-md p-3"
                  placeholder="enter your password"
                />
              </div>
              <button className="w-[95%] bg-blue-500 text-white rounded-md font-bold py-3 text-xl">
                Login
              </button>
            </form>

            <p className="text-center mt-5">
              Don't have an account?
              <Link to="/register">
                <span className="text-blue-500"> Register</span>
              </Link>
            </p>
          </div>
        </div>
        <div className=" w-[55%] h-[750px] rounded-r-md relative">
          <img
            src={loginimg}
            alt=""
            className="h-[750px] w-full rounded-r-md absolute -z-10"
          />
          <p className="text-5xl font-bold text-white absolute bottom-7 left-10">
            Login to the <span className="text-cyan-200"> Universe</span>
            <br /> of the
            <span className="text-yellow-300"> Aspiring </span>
            <br /> Developers!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
