import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-20">
      <header className="bg-gradient-to-br from-blue-300 to-blue-400">
        <div className="max-w-screen-xl mx-auto p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="grid grid-cols-12 gap-y-12 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-50">
                Discover Spiritual Bliss
              </h1>
              <span className="block text-xl font-medium text-gray-100 my-8">
                Navigate the Sacred Paths of India's Temples with MakeMyTirth
              </span>
              <div>
                <a
                  href="#"
                  className="inline-flex px-4 py-2 bg-yellow-300 ountline-none hover:bg-yellow-400 focus:bg-yellow-400 items-center gap-x-2 rounded"
                >
                  <span className="text-sm font-medium text-gray-700">
                    Book Tirth
                  </span>
                  <FaArrowCircleRight />
                </a>
                <a
                  href="#"
                  className="inline-block ml-2 px-6 py-2 ountline-none hover:bg-gray-100 hover:text-black bg-white items-center gap-x-2 rounded text-sm font-medium text-black"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div>
                <img
                  className="border-8 w-full md:h-[440px] rounded-tr-3xl rounded-bl-3xl border-blue-400 object-cover shadow-lg"
                  src="https://wallpapers.com/images/high/kedarnath-temple-fences-4k-20mjafmypuf2gqrn.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
