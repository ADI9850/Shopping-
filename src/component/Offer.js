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

      <div className=" mt-2 mb-8 flex justify-center">
        <span className=" flex-col font-bold text-3xl text-center ">
          <img src="photo/banner3.png" alt="banner" className=" h-72 mt-10" />

          <p className="text-gray-600  mt-6  leading-relaxed font-serif">
            Latest and bestselling Products
          </p>
          <p className="text-gray-600  leading-relaxed font-serif">Top Deals</p>
          <h1 className="font-extrabold text-orange-500 leading-relaxed">
            UP TO 40% OFF
          </h1>
          <p className="text-gray-600  leading-relaxed font-serif">Shop Now</p>
        </span>

        <div className=" mt-1 mx-1">
          <img src="photo/image5.png" alt="img" className="w-48 " />

          <img src="photo/watch-3.jpg" alt="img" className="w-48 mx-1 " />

          <img src="photo/23.jpg" alt="img" className="w-48 mx-1 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
