import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

import { navigation } from "../utils/index";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Design/SVG/Button";
import { HamburgerMenu } from "../Design/SvgDesign/Header";

const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

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
${openNavigation ? " bg-gray-300" : " bg-white backdrop-blur-sm"}`}
      >
        <div className="  flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <h2 className="cursor-pointer">Logo</h2>
          </a>
          <nav
            className={`${openNavigation ? "flex bg-white" : "hidden bg-white"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static
           lg:flex lg:mx-auto  lg:bg-white`}
          >
            <div
              className="relative m-30 flex flex-col rounded-lg bg-gradient-to-tr 
               max-w-full m-auto
              items-center justify-center   lg:flex-row"
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
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
          <Button
            className="hidden lg:flex  rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 
          font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]
           hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl
            active:shadow-none"
            href="#login"
          >
            Contact Us
          </Button>

          <Button
            className="ml-auto lg:hidden "
            px="px-3"
            onClick={toggleNavigation}
          >
            <Button
              className="ml-auto opacity-90 lg:hidden bg-emerald-300 rounded-lg "
              px="px-3"
              onClick={toggleNavigation}
            >
              <RxHamburgerMenu openNavigatio={openNavigation} />
            </Button>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
