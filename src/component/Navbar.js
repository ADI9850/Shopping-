import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className=" flex justify-around bg-gray-50 dark:bg-pink-600 rounded-3xl mt-2 h-18   lg:sticky top-0 z-50 ">
        <div className="mx-4">
          <img src="photo/logo1.png" alt="logo" className="w-18 h-12 " />
          <span className="text-violet-200 font-extrabold  ">E-Shop</span>
        </div>
        <div className="max-w-screen-xl px-3 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
                <li>
                  <h3
                    onClick={() => props.handleShow(false)}
                    className=" dark:text-white hover:underline hover:text-green-300  mt-1 cursor-pointer font-extrabold"
                  >
                    Shopping Cart{" "}
                  </h3>
                </li>
                <li>
                  <div
                    onClick={() => props.handleShow(true)}
                    className="text-gray-900 dark:text-white hover:underline hover:text-green-300 mt-1 cursor-pointer lg:mx-60  md:mx-0 font-extrabold"
                  >
                    Cart
                  </div>
                </li>
                <li>
                  <a
                    href="#login"
                    className="text-white mt-1 mr-10 mx-20 font-extrabold hover:text-green-300"
                  >
                    Login
                  </a>
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
