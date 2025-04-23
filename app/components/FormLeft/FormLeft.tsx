import { FaHandsHelping, FaUsers, FaHandHoldingHeart } from "react-icons/fa";
import { MotionWrapper } from "../MotionWrapper/MotionWrapper";

export const FormLeft = () => {
  return (
    <section className="w-full lg:w-[60%] px-6 py-10 md:px-10 space-y-6">
      <MotionWrapper>
        <p className="text-  font-semibold text-orange-500 uppercase tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Welcome to VJC Foundation
        </p>
      </MotionWrapper>

      <MotionWrapper>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-[cursive] leading-snug">
          We Help Thousands of Children to Get Their Education
        </h1>
      </MotionWrapper>

      <MotionWrapper>
        <p className="text-gray-500 tracking-widest " style={{ fontFamily: 'Roboto, sans-serif' }}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
        <p className="text-gray-500 mt-6 tracking-widest" style={{ fontFamily: 'Roboto, sans-serif' }}>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
      </MotionWrapper>

      <MotionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pt-4">
          <div className="text-center rounded-lg bg-white py-10 hover:bg-sky-600 hover:text-white transition-colors duration-300">
            <div className="bg-orange-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl">
              <FaHandsHelping />
            </div>
            <p className="pt-3 font-medium">Start Donating</p>
          </div>
          <div className="text-center rounded-lg bg-white py-10 hover:bg-sky-600 hover:text-white transition-colors duration-300">
            <div className="bg-orange-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl">
              <FaUsers />
            </div>
            <p className="pt-3 font-medium">Join Our Community</p>
          </div>
          <div className="text-center rounded-lg bg-white py-10 hover:bg-sky-600 hover:text-white transition-colors duration-300">
            <div className="bg-orange-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl">
              <FaHandHoldingHeart />
            </div>
            <p className="pt-3 font-medium">Be A Volunteer</p>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};
