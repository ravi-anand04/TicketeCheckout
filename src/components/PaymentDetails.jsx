import React from "react";
import { CiCircleInfo, CiLock } from "react-icons/ci";
import {
  FaApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import { LuAsterisk } from "react-icons/lu";
import { PiCreditCard } from "react-icons/pi";
import { RiRadioButtonFill } from "react-icons/ri";

const PaymentDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl mt-12 font-Roboto">Confirm & pay</h1>
      <div className="cancellation border rounded-xl bg-stone-100 border-stone-300  p-6">
        <div className="flex justify-between">
          <h1 className="font-semibold">Free cancellation</h1>
          <CiCircleInfo className="text-xl" />
        </div>
        <span className="text-stone-600">
          Tickets can be cancelled by 17th February, 2024
        </span>
      </div>
      <div className="contact-details flex flex-col gap-4">
        <h1 className="font-semibold text-xl">Enter your details</h1>
        <span className="text-stone-500">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details
        </span>
        <div className="user-input flex flex-col gap-4 my-2">
          <div className="name">
            <input
              type="text"
              placeholder={`Full Name *`}
              className="border px-4 rounded-lg border-stone-300 py-2 w-full "
            />
          </div>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              placeholder="Country code *"
              className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
            />
            <input
              type="text"
              placeholder="Phone number *"
              className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
            />
          </div>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              placeholder="Email *"
              className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
            />
            <input
              type="text"
              placeholder="Confirm email *"
              className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
            />
          </div>
        </div>
        <hr />
        <div className="additional-info flex flex-col gap-4 my-2">
          <h1 className="font-semibold text-xl">Additional Information</h1>
          <span className="text-stone-500">
            We need a few more details to complete your reservation
          </span>
          <div className="user-input flex flex-col gap-4 my-2">
            <div className="name">
              <input
                type="text"
                placeholder="Full Name *"
                className="border px-4 rounded-lg border-stone-300 py-2 w-full"
              />
            </div>
            <div className="flex justify-between gap-4">
              <input
                type="text"
                placeholder="Country code *"
                className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
              />
              <input
                type="text"
                placeholder="Phone number *"
                className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="payment-mode flex flex-col gap-4">
          <h1 className="font-semibold text-xl">Select your mode of payment</h1>
          <span className="text-stone-500">
            Payments with Tickete are secure and encrypted.
          </span>
          <div className="payment-card flex flex-col gap-4 rounded-xl border p-8">
            <div className="payment-header flex justify-between items-center">
              <div className="card flex gap-4 items-center">
                <span className="border px-2">
                  <PiCreditCard className="text-2xl" />
                </span>
                <h1>Credit and Debit card</h1>
              </div>
              <div className="selected-icon">
                <RiRadioButtonFill className="text-lg" />
              </div>
            </div>
            <div className="card-icons flex gap-2 my-4">
              <FaCcVisa className="text-3xl text-blue-500" />
              <FaCcMastercard className="text-3xl text-red-500" />
              <FaCcPaypal className="text-3xl text-blue-800" />
            </div>
            <div className="flex justify-between gap-6">
              <input
                type="text"
                placeholder="Country code *"
                className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
              />
              <input
                type="text"
                placeholder="Phone number *"
                className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
              />
            </div>
            <div className="flex justify-between gap-6 mt-2">
              <input
                type="text"
                placeholder="Email *"
                className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
              />
              <input
                type="text"
                placeholder="Confirm email *"
                className="border px-4 flex-1 rounded-lg border-stone-300 py-2"
              />
            </div>
            <hr />
            <div className="final-amount flex justify-between">
              <h1 className="font-semibold text-xl">Total payable: Rs 3000</h1>
              <h1 className="bg-green-600 flex items-center gap-2 text-white my-auto py-1 px-4 text-sm font-semibold rounded-2xl">
                <GiPiggyBank className="text-lg" />
                <span>You save: Rs 1000</span>
              </h1>
            </div>
            <span className="flex gap-4 items-center">
              <h1 className="text-stone-400 text-sm font-semibold">
                You will be charged in AED
              </h1>
              <CiCircleInfo className="text-xl" />
            </span>
            <h1 className="text-stone-500 text-sm mt-4">
              <span>By clicking "confirm & pay", you agree to </span>
              <span className="text-blue-500 hover:text-blue-700 underline">
                Tickete's general terms and conditions
              </span>
              <span> and </span>
              <span className="text-blue-500 hover:text-blue-700 underline">
                cancellation privacy
              </span>
            </h1>
            <button className="bg-black flex items-center mt-2 gap-2 px-6 py-3 text-white self-start rounded-xl text-bold">
              <CiLock className="text-xl" />
              <span>Confirm and Pay</span>
            </button>
          </div>
          <div className="apple-pay flex items-center bg-stone-100 px-6 py-4 rounded-xl border border-slate-300 justify-between">
            <span className="flex items-center gap-4">
              <div className="px-2 bg-stone-300 rounded-lg">
                <FaApplePay className="text-4xl text-stone-500" />
              </div>
              <span className="text-semibold text-stone-500">Coming Soon</span>
            </span>
            <div class="w-8 h-8 rounded-full bg-slate-200"></div>
          </div>
          <div className="gpay flex items-center bg-stone-100 px-6 py-4 mb-4 rounded-xl border border-slate-300 justify-between">
            <span className="flex items-center gap-4">
              <div className="px-2 bg-stone-300 rounded-lg">
                <FaGooglePay className="text-4xl text-stone-500" />
              </div>
              <span className="text-semibold text-stone-500">Coming Soon</span>
            </span>
            <div class="w-8 h-8 rounded-full bg-slate-200"></div>
          </div>

          <hr />
        </div>
        <div className="total-payable mt-8">
          <h1 className="text-xl font-bold">Total Payable: Rs 3000</h1>
          <div className="rounded-xl p-4 border border-stone-300 mt-6">
            <span className="flex gap-4 items-center">
              <CiCircleInfo />

              <h1 className="font-semibold">You will be charged in AED</h1>
            </span>
            <h1 className="ml-8 text-stone-500">
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
