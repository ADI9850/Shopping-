import React, { useState } from "react";
import Catagories from "./Catagories";
import Offer from "./Offer";
import LoginForm from "./LoginForm";

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
      <div className="flex justify-around">
        <img
          src="photo/banner1.png"
          alt="banner"
          className="h-96 w-full rounded-3xl mt-2 ml-2 mr-2"
        />
      </div>
      <h1 className="text-violet-500 font-extrabold text-center text-3xl mt-4">
        Explore Catagories
      </h1>
      <div className=" flex justify-around  w-1/2 shadow-xl  rounded-3xl  left-60 lg:left-60 md:left-20  sm:left-0 bg-pink-600 mx-auto mt-3 ">
        <div className=" ">
          <img
            src="photo/img6.jpg"
            alt="im"
            className="w-32 h-28 rounded-full ml-3 mt-3 hover:scale-110"
          />
          <button
            className="bg-violet-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mx-4 mt-3 "
            onClick={() => filterResult("Cloths")}
          >
            Cloths
          </button>
        </div>
        <div>
          <img
            src="photo/watch-2.jpg"
            alt="im"
            className="w-32 h-28 rounded-full ml-3 mt-3 hover:scale-110"
          />
          <button
            className="bg-violet-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mx-4 mt-3"
            onClick={() => filterResult("Watches")}
          >
            Watches
          </button>
        </div>
        <div>
          <img
            src="photo/hh-2.jpg"
            alt="im"
            className="w-32 h-28 rounded-full ml-3 mt-3 hover:scale-110"
          />
          <button
            className="bg-violet-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mx-4 mt-3"
            onClick={() => filterResult("Headphone")}
          >
            Headphone
          </button>
        </div>
      </div>
      <h1 className="text-violet-500 text-3xl font-extrabold text-center  mt-20">
        Latest collection
      </h1>
      <div className="flex flex-wrap mx-4  justify-around rounded overflow-hidden shadow-lg m-6 bg-gray-300 mt-60 sm:mt-20">
        {data.map((product, index) => (
          <div
            key={index}
            className="mb-8 mt-2  transition ease-in-out delay-100 sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 shadow-lg m-2   rounded-3xl dark:border dark:border-blue-800 hover:bg-sky-500 hover:text-white translate-y-1 hover:scale-110"
          >
            <div className="mx-8 ">
              <h3 className="text-lg font-semibold mb-2 ">{product.name}</h3>
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 mx-2 mb-2 rounded-2xl"
              />

              <p className=" mb-2 ">Description: {product.description}</p>
              <p className=" mb-2 font-bold">Price: Rs.{product.price}</p>
              <p className=" mb-2">Category: {product.category}</p>

              <button
                className="bg-blue-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mx-4 hover:bg-violet-600"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Offer/>
      <LoginForm/>
    </>
  );
};

export default ProductList;
