import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" flex  justify-around bg-gray-50 dark:bg-pink-600 rounded-3xl mt-2 h-18   lg:sticky top-0 z-50 ">
        <div className="mx-4">
          <img src="/photo/logo1.png" alt="logo" className="w-18 h-12 " />
          <span className="text-violet-200 font-extrabold  ">Shop</span>
        </div>
        <div className="max-w-screen-xl px-3 py-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
                <li>
                  <h3 className=" dark:text-white hover:underline hover:text-green-300  mt-1 cursor-pointer font-extrabold ">
                    <Link to="/">Shopping </Link>
                  </h3>
                </li>

                <div className="text-gray-900 dark:text-white hover:underline hover:text-green-300 mt-1 cursor-pointer lg:mx-40  md:mx-0 font-extrabold">
                  <Link to="/cart" className="lg:mx-40 ml-10">
                    Cart
                  </Link>
                </div>

                <li>
                  <Link
                    to="/login"
                    className="text-white mt-1 mx-20 font-extrabold hover:text-green-300"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
