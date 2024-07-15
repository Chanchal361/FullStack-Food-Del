import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
const Navbar = ({ isLogin, setIsLogin }) => {
  const { getTotoalFromCart, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="py-5 px-0 flex justify-between items-center navbar">
      <Link to="/">
        <img className=" logo" src={assets.logo} width={150} />
      </Link>
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

          <span
            className={` ${
              getTotoalFromCart() === 0
                ? ""
                : `absolute min-w-3 min-h-3 bg-orange-700 rounded-md top-[-8px] right-[-8px]`
            }`}
          ></span>
        </div>

        {!token ? (
          <button
            className=" bg-transparent text-[16px] text-bgWhite border border-orange-700 border-solid rounded-full  py-3 px-7 cursor-pointer lg:py-[8px] lg:px-[25px] lg2:py-[7px] lg2:px-4 lg2:text-[15px]  "
            onClick={() => setIsLogin(true)}
          >
            sign in
          </button>
        ) : (
          <div className=" relative navbar-profile cursor-pointer">
            <img src={assets.profile_icon} />
            <ul className=" absolute right-0 z-10 hidden navbar-droup">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center gap-[10px] cursor-pointer hover:text-red-400"
              >
                <img width={20} src={assets.bag_icon} />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={handleLogout}
                className="flex items-center gap-[10px] cursor-pointer hover:text-red-400"
              >
                <img width={20} src={assets.logout_icon} />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
        {/* <button
          className=" bg-transparent text-[16px] text-bgWhite border border-orange-700 border-solid rounded-full  py-3 px-7 cursor-pointer lg:py-[8px] lg:px-[25px] lg2:py-[7px] lg2:px-4 lg2:text-[15px]  "
          onClick={() => setIsLogin(true)}
        >
          sign in
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
