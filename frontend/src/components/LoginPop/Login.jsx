import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Login = ({ setIsLogin }) => {
  const [currenrState, setCurrentState] = useState("Sign Up");
  return (
    <div className=" absolute w-full h-full grid z-10 bg-PopBlack">
      <form
        action=""
        className=" place-self-center text-PopWhite bg-white flex flex-col gap-6 p-[25px_30px]
        rounded-2xl text-[14px] animate-fade-in duration-500" 
        style={{ width: "max(23vw,330px)" }}
      >
        <div className=" flex justify-between items-center text-black font-semibold ">
          <h2>{currenrState}</h2>
          <img
            className=" w-4 cursor-pointer"
            onClick={() => setIsLogin(false)}
            src={assets.cross_icon}
          />
        </div>
        <div className=" flex flex-col gap-5">
          {currenrState === "Login" ? (
            <></>
          ) : (
            <input
              className=" outline-none border-2 border-PopWhite rounded-md p-[6px]"
              type="text"
              p
              placeholder="Your Name"
              required
            />
          )}
          <input
            className=" outline-none border-2 border-PopWhite rounded-md p-[6px]"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className=" outline-none border-2 border-PopWhite rounded-md p-[6px]"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className=" border-none p-[8px] rounded-md text-white bg-red-500 text-[15px] cursor-pointer">
          {currenrState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className=" flex start gap-2 mt-[-15px]">
          <input
           className="mt-[-17px] cursor-pointer"
          type="checkbox" required />
          <p 
          //  className=" text-[15px]"
          >By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

        {currenrState === "Login" ? (
          <p>
            Create a new account? 
            <span 
            className=" cursor-pointer text-red-500 font-semibold"
            onClick={() => setCurrentState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? 
            <span 
            className=" cursor-pointer text-red-500 font-semibold"
            onClick={() => setCurrentState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
