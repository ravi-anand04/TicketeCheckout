import React from "react";
import { FaStar } from "react-icons/fa";
import { IoTicketOutline, IoTime, IoTrophy } from "react-icons/io5";
import { PiCalendarBlankFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { GiPiggyBank } from "react-icons/gi";
import { CiCircleInfo } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Summary = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };

  const img_url = "https://source.unsplash.com/random/400x250/?scenery";

  return (
    <div className="border border-stone-300 mt-12 rounded-2xl p-3">
      <div className="carousel mb-8">
        <Slider {...settings}>
          <div className="relative">
            <img src={img_url} className="rounded-2xl" />
            <h1 className="absolute left-0 flex items-center gap-1 rounded-md p-1 text-xs font-semibold top-0 m-3 bg-white">
              <span>
                <IoTrophy />
              </span>
              <span>Bestseller</span>
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 left-0">
              <GrPrevious />
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 right-0">
              <GrNext />
            </h1>
          </div>
          <div className="relative">
            <img src={img_url} className="rounded-2xl" />
            <h1 className="text-2xl absolute left-0 flex items-center gap-1 rounded-md p-1 text-xs font-semibold top-0 m-3 bg-white">
              <span>
                <IoTrophy />
              </span>
              <span>Bestseller</span>
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 left-0">
              <GrPrevious />
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 right-0">
              <GrNext />
            </h1>
          </div>
          <div className="relative">
            <img src={img_url} className="rounded-2xl" />
            <h1 className="text-2xl absolute left-0 flex items-center gap-1 rounded-md p-1 text-xs font-semibold top-0 m-3 bg-white">
              <span>
                <IoTrophy />
              </span>
              <span>Bestseller</span>
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 left-0">
              <GrPrevious />
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 right-0">
              <GrNext />
            </h1>
          </div>
          <div className="relative">
            <img src={img_url} className="rounded-2xl" />
            <h1 className="text-2xl absolute left-0 flex items-center gap-1 rounded-md p-1 text-xs font-semibold top-0 m-3 bg-white">
              <span>
                <IoTrophy />
              </span>
              <span>Bestseller</span>
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 left-0">
              <GrPrevious />
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 right-0">
              <GrNext />
            </h1>
          </div>
          <div className="relative">
            <img src={img_url} className="rounded-2xl" />
            <h1 className="text-2xl absolute left-0 flex items-center gap-1 rounded-md p-1 text-xs font-semibold top-0 m-3 bg-white">
              <span>
                <IoTrophy />
              </span>
              <span>Bestseller</span>
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 left-0">
              <GrPrevious />
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 right-0">
              <GrNext />
            </h1>
          </div>
          <div className="relative">
            <img src={img_url} className="rounded-2xl" />
            <h1 className="text-2xl absolute left-0 flex items-center gap-1 rounded-md p-1 text-xs font-semibold top-0 m-3 bg-white">
              <span>
                <IoTrophy />
              </span>
              <span>Bestseller</span>
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 left-0">
              <GrPrevious />
            </h1>
            <h1 className="text-2xl absolute text-white mx-2 top-20 right-0">
              <GrNext />
            </h1>
          </div>
        </Slider>
      </div>
      <div className="header flex flex-col gap-2 px-4">
        <div className="rating flex gap-2 items-center">
          <FaStar />
          <b>4.9 (4.5k), </b> <span className="font-semibold">Resort</span>
        </div>
        <h1 className="font-semibold mb-4">
          Amsterdam open boat canal cruise - Live Guiye from Anne Frank Housef
        </h1>
        <div className="ticket flex gap-2 items-center">
          <IoTicketOutline />
          <span>Presidential Suite</span>
        </div>
        <div className="date flex gap-2 items-center">
          <PiCalendarBlankFill />
          <span>Friday, March 30th, 2024</span>
        </div>
        <h1 className="ml-6">Duration: 6h</h1>
        <div className="time flex gap-2 items-center">
          <IoTime />
          <span>2:00 PM</span>
        </div>
        <h1 className="ml-6">Operating hours: 11:00 PM to 5:00 PM</h1>
        <div className="guests flex gap-2 items-center">
          <MdPeopleAlt />
          <span>5 Guests</span>
        </div>
        <hr />
        <div className="payment-summary flex justify-between mb-4">
          <h1>View payment summary</h1>
          <span className="font-bold text-xl">+</span>
        </div>
      </div>
      <hr />
      <div className="footer flex flex-col gap-4 mt-4 px-6">
        <div className="payment-summary flex justify-between">
          <h1 className="font-semibold">Total Payable</h1>
          <span className="font-bold">Rs 3699 </span>
        </div>
        <div className="savings w-[130px]">
          <span className="flex items-center gap-1 rounded-lg px-1 bg-emerald-100 font-semibold py-1 text-emerald-600 text-sm">
            <GiPiggyBank />
            <h1 className="text-xs">You saved Rs. 599</h1>
          </span>
        </div>
        <span className="flex gap-4 items-center">
          <h1 className="text-sm text-stone-500 underline font-semibold">
            You will be charged in AED
          </h1>
          <CiCircleInfo />
        </span>
        <div className="terms">
          <h1 className="text-sm flex flex-wrap gap-1 mt-6">
            By clicking “confirm & pay”, you agree to
            <span className="text-blue-500 hover:text-blue-700 underline">
              Tickete’s general terms and conditions
            </span>
            and
            <span className="text-blue-500 hover:text-blue-700 underline">
              cancellation policy.
            </span>
          </h1>
        </div>
        <button className="bg-black flex gap-2 text-bold  justify-center items-center rounded-xl text-white px-6 py-3">
          <CiLock className="text-xl" />
          <h1>Confirm and pay</h1>
        </button>
      </div>
    </div>
  );
};

export default Summary;
