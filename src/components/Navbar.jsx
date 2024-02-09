import React from "react";
import Logo from "../assets/Logo";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="desktop max-sm:hidden">
        <div className="items px-48 py-4 max-xl:px-12 flex flex-wrap items-center text-xl justify-between">
          <Logo />
          <span className="flex font-semibold text-lg text-stone-500 gap-1 items-center">
            <CiLock className="text-xl" />
            <span>Checkout</span>
          </span>
          <span className="flex font-semibold text-lg text-stone-500 gap-1 items-center">
            <IoMdHelpCircleOutline className="text-xl" />
            <span>Help</span>
          </span>
        </div>
        <div className="time bg-black py-1 text-center text-white">
          <h1>Holding your tickets for 30:00</h1>
        </div>
      </div>
      <div className="mobile sm:hidden">
        <div className="items p-4 flex flex-wrap items-center text-xl justify-between">
          <FaArrowLeftLong />
          <span className="flex font-semibold text-lg text-stone-500 gap-1 items-center">
            <CiLock />
            <span>Checkout</span>
          </span>
          <span className="flex font-semibold text-lg text-stone-500 gap-1 items-center">
            <IoMdHelpCircleOutline className="text-xl" />
          </span>
        </div>
        <div className="time bg-black py-1 text-center text-white">
          <h1>Holding your tickets for 30:00</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
