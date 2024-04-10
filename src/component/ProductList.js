import React, { useState } from "react";
import Catagories from "./Catagories";
import Offer from "./Offer";


import { Link } from "react-router-dom";

const ProductList = ({ addToCart }) => {
  const [data, setData] = useState(Catagories);

  const filterResult = (cartItem) => {
    const result = Catagories.filter((curData) => {
      return curData.category === cartItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="flex justify-around ">
        <img
          src="photo/banner1.png"
          alt="banner"
          className="h-96 w-full rounded-3xl mt-2 ml-2 mr-2"
        />
      </div>
      <h1 className="text-orange-500 font-extrabold text-center text-4xl mt-4 mb-6">
        <span className="border-dotted border-y-2 border-pink-400">
          Explore Catagories
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-around w-full lg:w-1/2 shadow-xl rounded-3xl mt-3 bg-pink-600 lg:mx-auto">
        <div className="flex flex-col items-center lg:items-start ">
          <img
            src="photo/img6.jpg"
            alt="im"
            className="w-32 h-28 rounded-full ml-3 lg:ml-0 mt-3 lg:mt-3 hover:scale-110"
          />
          <button
            className="bg-violet-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mt-3 lg:mt-0"
            onClick={() => filterResult("Cloths")}
          >
            Cloths
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="photo/watch-2.jpg"
            alt="im"
            className="w-32 h-28 rounded-full ml-3 lg:ml-0 mt-3 lg:mt-3 hover:scale-110"
          />
          <button
            className="bg-violet-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mt-3 lg:mt-0"
            onClick={() => filterResult("Watches")}
          >
            Watches
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="photo/hh-2.jpg"
            alt="im"
            className="w-32 h-28 rounded-full ml-3 lg:ml-0 mt-3 lg:mt-3 hover:scale-110"
          />
          <button
            className="bg-violet-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mt-3 lg:mt-0 "
            onClick={() => filterResult("Headphone")}
          >
            Headphone
          </button>
        </div>
      </div>

      <h1 className="text-orange-500 text-4xl font-extrabold text-center  mt-20 ">
        <span className="border-dotted border-y-2 border-pink-400">
          Latest collection
        </span>
      </h1>
      <div className="flex flex-wrap mx-4  justify-around rounded overflow-hidden shadow-lg m-6   sm:mt-20">
        {data.map((products, index) => (
          <div
            key={products.productId}
            className="mb-8 mt-2  transition ease-in-out delay-100 sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 shadow-lg m-2   rounded-3xl dark:border dark:border-blue-800 hover:bg-sky-500 hover:text-white translate-y-1 hover:scale-110"
          >
            <div className="mx-8 text-center">
              <Link to={`/product/${String(products.productId)}`}>
                <img
                  src={products.image}
                  alt={products.name}
                  className="w-40 h-40 mx-2 mb-2 mt-2 rounded-2xl"
                />
              </Link>
              <h3 className="text-lg font-semibold mb-2 ">{products.name}</h3>

              <p className=" mb-2 font-bold"> Rs.{products.price}</p>
              <p className=" mb-2 font-bold">Category: {products.category}</p>

              <button
                className="bg-blue-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mx-4 hover:bg-violet-600"
                onClick={() => addToCart(products)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Offer />
    </>
  );
};

export default ProductList;
