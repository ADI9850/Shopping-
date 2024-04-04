import React from "react";

const Offer = () => {
  return (
    <div>
      <h1 className="text-violet-500 text-3xl font-extrabold text-center mt-6">
        Offers
      </h1>

      <div className=" mt-2 mb-8 flex justify-center">
        <span className=" flex-col font-bold text-3xl text-center ">
          <img
            src="photo/banner3.png"
            alt="banner"
            className="w-87 h-72 mt-10"
          />

          <p className="text-pink-600  mt-6  leading-relaxed">
            Latest and bestselling Products
          </p>
          <p className="text-pink-600  leading-relaxed">Top Deals</p>
          <h1 className="font-extrabold text-orange-500 leading-relaxed">
            UP TO 40% OFF
          </h1>
          <p className="text-pink-600  leading-relaxed">Shop Now</p>
        </span>

        <div className=" mt-1 mx-1">
          <img src="photo/image5.png" alt="img" className="w-48 " />

          <img src="photo/watch-3.jpg" alt="img" className="w-48 mx-1" />

          <img src="photo/23.jpg" alt="img" className="w-48 mx-1" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
