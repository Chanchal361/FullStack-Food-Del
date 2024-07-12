import React, { useContext } from "react";
import { StoreContext } from "../../components/Context/StoreContext";

const PlaceOrder = () => {
  const { getTotoalFromCart } = useContext(StoreContext);
  return (
    <form className=" flex items-start justify-between gap-[50px] mt-20 ">
      {/* left side */}
      <div className="w-full" style={{ maxWidth: "max(30%,500px)" }}>
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className=" flex gap-[10px]">
          <input
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="First name"
          />
          <input
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
          type="email"
          placeholder="Email address"
        />
        <input
          type="text"
          placeholder="Street"
          className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
        />
        <div className=" flex gap-[10px]">
          <input
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="City"
          />
          <input
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="State"
          />
        </div>
        <div className=" flex gap-[10px]">
          <input
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="Zip code"
          />
          <input
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
          type="text"
          placeholder="phone"
          name=""
          id=""
        />
      </div>
      {/* right side  */}
      <div className="w-full " style={{ maxWidth: "(40%,500px)" }}>
        <div className=" flex-1 flex flex-col gap-5">
          <h2 className="font-semibold text-[30px]">Cart Totals</h2>
          <div>
            <div className=" flex justify-between text-gray-500">
              <p>Subtotal</p>
              <p>₹{getTotoalFromCart()}</p>
            </div>
            <hr className=" m-[10px_0px]" />
            <div className=" flex justify-between text-gray-500">
              <p>Delivery Fee</p>
              <p>₹{getTotoalFromCart()===0?0:50}</p>
            </div>
            <hr className=" m-[10px_0px]" />
            <div className=" flex justify-between text-gray-500">
              <p>Total</p>
              <p>₹{getTotoalFromCart()===0?0:getTotoalFromCart()+50}</p>
            </div>
          </div>
          <button
            className=" border-none text-white bg-red-500 p-[12px_0px] rounded-md
          cursor-pointer mt-8 "
            style={{ width: "max(15vw,200px)" }}
          >
            PROCED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
