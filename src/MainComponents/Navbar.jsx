import { GiHamburger } from "react-icons/gi";
import { NavList } from "../utils";

import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

import { navigation } from "../utils/index";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(true);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <>
      <div
        className={`fixed top-0 z-50 left-0 w-full border-b border-n-6 lg:backdrop-blur-sm sm:bg-white lg:border-none 
${openNavigation ? "backdrop-filter backdrop-blur-sm bg-opacity-90" : ""}`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <h2 className="cursor-pointer">Logo</h2>
          </a>

          <nav
            className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static
           lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col rounded-lg bg-white items-center justify-center m-auto lg:flex-row">
              {NavList.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font- text-2xl uppercase gap-3 transition-colors hover:text-green-500
                   ${item.onlyMobile ? "lg:hidden" : ""} pl-9 px-6 py-8 lg:mr-0.25 lg:text-sm lg:font-semibold`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <a
            href="#signup"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            Enroll Now
          </a>

          <button
            className="hidden lg:flex  rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 
          font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]
           hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl
            active:shadow-none"
            href="#login"
          >
            Contact Us
          </button>

          <button
            className="ml-auto lg:hidden  "
            px="px-3"
            onClick={toggleNavigation}
          >
            <RxHamburgerMenu openNavigatio={openNavigation} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
