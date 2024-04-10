import React from "react";

const Offer = () => {
  return (
    <div>
      <h1 className="text-orange-500 text-4xl font-extrabold text-center mt-6 ">
        <span className="border-dotted  border-y-2 border-pink-300 ">
          {" "}
          Offers
        </span>
      </h1>

      <div className="mt-2 mb-8 flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="flex flex-col items-center  text-centerlg:items-start ">
          <img src="photo/banner3.png" alt="banner" className="h-72 mt-10" />
          <p className="text-gray-600  mt-6 leading-relaxed font-serif text-2xl">
            Latest and bestselling Products
          </p>
          <p className="text-gray-600 leading-relaxed font-serif text-2xl">
            Top Deals
          </p>
          <h1 className="font-extrabold text-orange-500 leading-relaxed text-3xl">
            UP TO 40% OFF
          </h1>
          <p className="text-gray-600 leading-relaxed font-serif text-2xl">
            Shop Now
          </p>
        </div>

        <div className="mt-4 lg:mt-0 mx-1 flex flex-col justify-center items-center">
          <img
            src="photo/image5.png"
            alt="img"
            className="w-full lg:w-48 mb-2 lg:mb-0"
          />
          <img
            src="photo/watch-3.jpg"
            alt="img"
            className="w-full lg:w-48 mx-2 mb-2 lg:mb-0"
          />
          <img
            src="photo/23.jpg"
            alt="img"
            className="w-full lg:w-48 mx-2 mt-2 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
