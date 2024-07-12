import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
const Navbar = ({ isLogin, setIsLogin }) => {

  const {getTotoalFromCart}=useContext(StoreContext)
  return (
    <div className="py-5 px-0 flex justify-between items-center navbar">
     <Link to='/'><img className=" logo" src={assets.logo} width={150} /></Link>
      <ul className=" flex list-none gap-5 text-xl  text-bgWhite navbar-menu ">
        <Link to="/" className=" cursor-pointer">
          home
        </Link>
        <a href="#explore-menu" className=" cursor-pointer">
          menu
        </a>
        <a href="#app-download" className=" cursor-pointer">
          mobile-app
        </a>
        <a href="#footer" className=" cursor-pointer">
          {" "}
          contact us
        </a>
      </ul>

      <div className=" flex  items-center gap-10  navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>

          <span className={` ${getTotoalFromCart()===0 ? "": `absolute min-w-3 min-h-3 bg-orange-700 rounded-md top-[-8px] right-[-8px]`}`}>
            
          </span>
        </div>

        <button
          className=" bg-transparent text-[16px] text-bgWhite border border-orange-700 border-solid rounded-full  py-3 px-7 cursor-pointer lg:py-[8px] lg:px-[25px] lg2:py-[7px] lg2:px-4 lg2:text-[15px]  "
          onClick={() => setIsLogin(true)}
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
