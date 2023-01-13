import React from "react";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import vector from "../../public/Vector.png";
import loginimg from "../../public/Rectangle 21.png";

function Register() {
  return (
    <div className="pt-24 px-24">
      <div>
        <Title titlename="Register" />
      </div>
      <div className="flex flex-row justify-center px-8">
        <div className="bg-gray-100 w-[45%] h-[750px] rounded-l-md">
          <div className="flex m-10 items-center">
            <img src={vector} alt="" />
            <p className="ml-5 font-semibold text-2xl">
              Let's Join!
            </p>
          </div>
          <div className="ml-10 text-xs">
            <form action="">
              <div class="mb-4">
                <label class="text-gray-500" for="name">
                  Name
                </label>
                <input className="w-[95%] rounded-md p-3" id="name" type="text" placeholder=" " />
              </div>
              <div class="mb-4">
                <label class="text-gray-500" for="phone">
                  Phone Number
                </label>
                <input className="w-[95%] rounded-md p-3 semibold" id="name" type="tel" placeholder=" " />
              </div>
              <div className="mb-4">
                <label class="text-gray-500" htmlFor="email">Email</label>
                <input type="email" name="Email" id="email" className="w-[95%] rounded-md p-3" placeholder=" " />
              </div>
              <div>
                <label className="text-gray-500">Gender</label>
                <div className="my-2">
                  <input type="radio" name="Gender" /><span className="mx-3 mr-7 text-black">Male</span>
                  <input type="radio" name="Gender" className="" /><span className="mx-3 text-black">Female</span>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Qualification</label>
                <div className="my-2">
                  <input type="radio" name="qual" /><span className="mx-3 mr-7 text-black">Student</span>
                  <input type="radio" name="qual" className="" /><span className="mx-3 text-black">Teacher</span>
                </div>
              </div>
              <div>
                <label className="text-gray-500">Course</label>
                <div className="my-2">
                  <input type="radio" name="dev" /><span className="mx-3 mr-7 text-black">Web Development</span>
                  <input type="radio" name="dev" className="" /><span className="mx-3 text-black">App Development</span>
                </div>
              </div>
              <div class="inline-block relative w-64">
                <label className="text-gray-500">Country</label>
                <select class="text-black w-[150%] my-3 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-10" placeholder="Select">
                  <option>Select</option>
                  <option>India</option>
                  <option>England</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              <div className="flex my-2 text-center mb-5">
                <div>
                <div className="text-gray-500">Password</div>
                <input type="password" name="Password" id="password" className="ml-6 my-1 w-[60%] h-[45%] rounded-md p-3" placeholder=" "/>
                </div>
                <div>
                <div className="text-gray-500">Confirm Password</div>
                <input type="password" name="Password" id="password" className=" ml-4 my-1 w-[60%] h-[45%] rounded-md p-3" placeholder=" "/>
                </div>
              </div>
              <button className="w-[80%] py-2 bg-blue-500 text-white font-bold text-sm">Sign Up</button>
            </form>

            <p className="text-center mr-8 mt-5">
              Already have an account?
              <Link to="/register">
                <span className="text-blue-500">Log in</span>
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

export default Register;
