import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" text-Fwhite bg-FdBlack flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-20" id="footer">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20 footer-content">
        <div className=" flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            facere earum repellendus laborum! Beatae te!
          </p>
          <div className="  flex gap-4 cursor-pointer ">
            <img width={40} src={assets.facebook_icon} alt="" />
            <img width={40} src={assets.twitter_icon} alt="" />
            <img width={40} src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className=" flex flex-col items-start gap-5">
          <h2 className=" text-white">COMPANY</h2>
          <ul className=" list-none cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy </li>
          </ul>
        </div>

        <div className=" flex flex-col items-start gap-5">
          <h2 className=" text-white">GET IN TOUCH</h2>
          <ul className=" list-none cursor-pointer">
            <li>+91 7903476936</li>
            <li>concate@raja.com</li>
          </ul>
        </div>
      </div>
      <hr className=" w-full h-1 my-5 mx-0 bg-gray-500 border-none" />
      <p className="f">Copyright 2024 raja.com -All Right Reserved.</p>
    </div>
  );
};

export default Footer;
