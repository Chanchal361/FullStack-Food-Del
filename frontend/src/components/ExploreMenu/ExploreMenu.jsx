import React from "react";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category,setCategory}) => {
  console.log( " this is true category ..."+ category)
  return (
    <div className=" flex flex-col gap-5 " id="explore-menu">
      <h1 className=" text-Darkse font-semibold">Explore our menu </h1>
      <p className=" max-w-[60%]  text-gray-700 ex-text">
        Choose from a diverse menu featuring a array of dishes. Our mission is
        to satisfy your cravings elevate your dining experience,one delicious
        meal at a time
      </p>
      <div className=" explore  flex justify-between items-center gap-[30px] my-5 mx-0 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div key={index} c lassName=" flex flex-col items-center 
            "
            onClick={() => setCategory( pre=> pre===item.menu_name?"All":item.menu_name)}
             
            >
              <img
                className={`w-[7.5vw] min-w-[80px] transition duration-200 cursor-pointer rounded-full
                  ${category===item.menu_name ? ' border-4 rounded-full border-red-400 p-[2px] ':''}
                  `}
                src={item.menu_image}
                alt="not"
               
              />
              <p 
                className=" mt-2 text-DimGray cursor-pointer "
                style={{ fontSize: "max(1.4vw,17px)" }}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
  
    </div>
  );
};

export default ExploreMenu;
