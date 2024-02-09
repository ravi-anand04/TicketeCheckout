import React from "react";
import Logo from "../assets/Logo";
import { FaHeart } from "react-icons/fa";
import WhiteLogo from "../assets/WhiteLogo";

export const Footer = () => {
  return (
    <div className="px-48 py-4 max-xl:px-12 max-md:px-4 bg-black text-white">
      <div className="header my-12">
        <WhiteLogo />
      </div>
      <hr />
      <div className="links flex max-sm:flex-col gap-8 my-6">
        <h1 className="flex gap-2 items-center max-md:order-2">
          <span className="text-stone-500">Made with</span>
          <span>
            <FaHeart className="text-red-600 text-extrabold text-xl" />
          </span>
        </h1>
        <div className="flex flex-wrap text-sm text-stone-500 gap-3">
          <li className="text-stone-300 max-sm:list-none hover:text-stone-600 ease-in-out delay-75">
            Privacy Policy
          </li>
          <li className="text-stone-300 hover:text-stone-600 ease-in-out delay-75">
            Terms of usage
          </li>
          <li className="text-stone-300 hover:text-stone-600 ease-in-out delay-75">
            Cancellation Policy
          </li>
          <li className="text-stone-300 max-sm:list-none hover:text-stone-600 ease-in-out delay-75">
            Sitemap
          </li>
        </div>
      </div>
    </div>
  );
};
