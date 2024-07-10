import React from "react";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="py-5 px-0 flex justify-between items-center">
      <img src={assets.logo} width={150} alt="" />
      <ul className=" flex list-none gap-5 text-xl  text-bgWhite">
        <li className=" cursor-pointer">home</li>
        <li className=" cursor-pointer">menu</li>
        <li className=" cursor-pointer">mobile-app</li>
        <li className=" cursor-pointer"> contact us</li>
      </ul>

      <div className=" flex items-centre gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <span className=" absolute min-w-3 min-h-3 bg-orange-700 rounded-md top-[-8px] right-[-8px]">0</span>
        </div>

        <button className=" bg-transparent text-[16px] text-bgWhite border border-orange-700 border-solid rounded-full  py-3 px-7 cursor-pointer">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
