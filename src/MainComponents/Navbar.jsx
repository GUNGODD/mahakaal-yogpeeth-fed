import { useLocation } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Design/SVG/Button";
import { navigation } from "../utils/index";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isExpand, setIsExpand] = useState(null);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsExpand((prev) => (prev === id ? null : id));
  };

  const handleMouseEnter = (id) => {
    setIsExpand(id);
  };

  const handleMouseLeave = () => {
    setIsExpand(null);
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 left-0 w-full border-b border-n-6 lg:backdrop-blur-sm sm:bg-white lg:border-none ${
          openNavigation ? " bg-white " : " bg-white backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <h2 className="cursor-pointer">Logo</h2>
          </a>
          <nav
            className={`${
              openNavigation ? "flex bg-white" : "hidden bg-white"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-white`}
          >
            <div className="relative m-30 flex flex-col rounded-lg bg-gradient-to-tr max-w-full m-auto items-center justify-center lg:flex-row">
              {navigation.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.url}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`block relative font-code text-2xl uppercase text-black font-bold transition-colors hover:text-green-500 ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                      item.url === pathname.hash
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  >
                    {item.title}
                    {item.Expand && (
                      <RxCaretDown
                        className="absolute top-1/2 sm:right-0 lg:right-4 m-auto transform -translate-y-1/2"
                      />
                    )}
                  </a>
                  {item.Expand && isExpand === item.id && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute left-0 right-0 bg-white shadow-lg"
                      >
                        {item.submenu?.map((subItem) => (
                          <a
                            key={subItem.id}
                            href={subItem.url}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </nav>
          <a
            href="#signup"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block uppercase"
          >
            Enroll Now
          </a>
          <Button
            className="hidden lg:flex rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            href="#login"
          >
            Contact Us
          </Button>
          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <div className="grid h-9 rounded-lg place-content-center">
              <Hamburger toggled={openNavigation} toggle={toggleNavigation} />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;