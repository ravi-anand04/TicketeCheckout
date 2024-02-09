import React from "react";
import Logo from "../assets/Logo";
import { FaHeart } from "react-icons/fa";
import WhiteLogo from "../assets/WhiteLogo";

export const Footer = () => {
  return (
    <div className="px-48 py-4 max-xl:px-12 bg-black text-white">
      <div className="header my-12">
        <WhiteLogo />
      </div>
      <hr />
      <div className="links flex gap-8 my-6">
        <h1 className="flex gap-2 items-center">
          <span className="text-stone-500">Made with</span>
          <span>
            <FaHeart className="text-red-600 text-extrabold text-xl" />
          </span>
        </h1>
        <ul className="flex flex-wrap gap-8 list-disc">
          <li>Privacy Policy</li>
          <li>Terms of usage</li>
          <li>Cancellation Policy</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  );
};
