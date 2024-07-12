import React from "react";
import { assets } from "../assets/assets";

const AppDownLoad = () => {
  return (
    <div className=" my-auto mx-auto mt-24 text-center font-semibold" style={{fontSize:'max(3vw,20px)'}} id="app-download" >
      <p>
        For Better Exprence Download <br /> T App
      </p>
      <div className=" flex justify-center mt-10 gap-4">
        <img 
         className="w-28 max-w-[180px] transition duration-500' cursor-pointer hover:transform hover:scale-[1.05] "
        src={assets.play_store} />
        <img 
         className="w-28 max-w-[180px] transition dur' cursor-pointer hover:transform hover:scale-[1.05]"
        src={assets.app_store} />
      </div>
    </div>
  ); 
};

export default AppDownLoad;
