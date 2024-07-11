import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="  absolute flex flex-col items-start gap-[1.5vw]  max-w-[50%] bottom-[10%] left-[6vw] animate-fade-in  ">
        <h2
          className=" font-bold text-white "
          style={{ fontSize: "max(4.5vw, 22px)" }}
        >
          {" "}
          Order Your favoutite food here
        </h2>
        <p className=" text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.Our
        </p>
        <button
          className=" border-none text-DimGray font-semibold py-[1vw] px-[2.3vw] bg-white rounded-full"
          style={{ fontSize: "max(1vw, 13px)" }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
}; 

export default Header;
