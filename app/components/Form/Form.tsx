"use client"

import { HeartHandshake } from "lucide-react";
import { MotionWrapper } from "../MotionWrapper/MotionWrapper";


export const Form = () => {
  return (
    <aside className="relative w-full lg:w-1/2 bg-[#2e2a18] text-white px-6 py-8 md:px-10 md:py-12 flex flex-col gap-6 sm:px-3 max-w-full">
      {/* Floating Stats Box */}
      
        <div className="absolute -top-20 right-0 md:-top-24 w-full z-30">
          <div className="flex items-center gap-4 lg:gap-6 bg-sky-600 backdrop-blur-sm px-6 py-4 rounded-t-lg shadow-md w-full">
            <HeartHandshake className="w-12 h-12 md:w-16 md:h-16 text-yellow-400" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">$1,850,000</h2>
              <p className="text-xs md:text-sm font-semibold text-yellow-400 uppercase">
                Funds Raised by 1200 People
              </p>
            </div>
          </div>
        </div>
        <MotionWrapper>
        <div className="leading-8">
          <p className="text-sm text-orange-400 uppercase">Donate Now</p>
          <h2 className="text-2xl font-[cursive] mt-4 font-bold leading-snug">
            Giving is the greatest act of grace
          </h2>

          <form className="space-y-8 mt-8">
            {/* Input Fields */}
            <div>
              <label className="text-sm text-[#d49d35]">Your Full Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full mt-1 p-3 rounded bg-[#3a3425] text-white outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-[#d49d35]">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 p-3 rounded bg-[#3a3425] text-white outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-[#d49d35]">Select Causes</label>
              <select className="w-full mt-1 p-3 rounded bg-[#3a3425] text-white outline-none">
                <option>Food</option>
                <option>Education</option>
                <option>Healthcare</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-[#d49d35]">Amount to Give</label>
              <input
                type="number"
                placeholder="Amount"
                className="w-full mt-1 p-3 rounded bg-[#3a3425] text-white outline-none"
              />
            </div>

            {/* Radio Payment Options */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
              <label>
                <input type="radio" name="payment" className="mr-1" /> PayPal
              </label>
              <label>
                <input type="radio" name="payment" className="mr-1" /> Credit Card
              </label>
              <label>
                <input type="radio" name="payment" className="mr-1" /> Payoneer
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-[#b5832b]"
            >
              Donate Now
            </button>
          </form>
        </div>
      </MotionWrapper>
    </aside>
  );
};
