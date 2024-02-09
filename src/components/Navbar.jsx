import React from "react";
import Logo from "../assets/Logo";

const Navbar = () => {
  return (
    <div className="">
      <div className="items px-48 py-4 max-xl:px-12 flex flex-wrap items-center text-xl justify-between">
        <Logo />
        <span>Checkout</span>
        <span>Help</span>
      </div>
      <div className="time bg-black py-1 text-center text-white">
        <h1>Holding your tickets for 30:00</h1>
      </div>
    </div>
  );
};

export default Navbar;
