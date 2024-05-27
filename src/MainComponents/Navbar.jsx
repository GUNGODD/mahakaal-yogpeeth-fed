import { Link, useLocation } from "react-router-dom";
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
  const [tempNavigation, setTempNavigation] = useState([]);
  const [activeItem, setActiveItem] = useState(null); // New state for active item

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item.id); // Set the active item
    if (item.Expand && window.innerWidth < 640) {
      if (isExpand === item.id) {
        setIsExpand(null);
        setTempNavigation([]);
      } else {
        setIsExpand(item.id);
        setTempNavigation(item.submenu || []);
      }
    } else {
      setIsExpand((prev) => (prev === item.id ? null : item.id));
    }
  };

  const handleMouseEnter = (id) => {
    if (!openNavigation && window.innerWidth >= 640) {
      setIsExpand(id);
    }
  };

  const handleMouseLeave = () => {
    if (!openNavigation && window.innerWidth >= 640) {
      setIsExpand(null);
    }
  };

  const renderNavigationItems = () => {
    const items = [];
    navigation.forEach((item) => {
      items.push(
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.url}
            onClick={(e) => handleClick(e, item)}
            className={`block relative font-code text-2xl uppercase text-indigo-500 font-bold transition-colors hover:text-indigo-600 ${
              item.onlyMobile ? "lg:hidden" : ""
            } px-6 py-6 md:py-8 lg:-mr-9 mt-2 lg:text-xs lg:font-semibold ${
              item.url === pathname.hash ? "z-2 lg:text-n-1" : "sm:text-n-1/50"
            } sm:leading-5 sm:hover:text- xl:px-12 ${
              activeItem === item.id ? "text-indigo-600" : ""
            }`} // Apply active class
          >
        
            {<Link to={item.url}>     {item.title} </Link>}
            {item.Expand && (
              <RxCaretDown className="absolute top-1/2 right-0 transform -translate-y-1/2 lg:right-4" />
            )}
          </a>
          {item.Expand && isExpand === item.id && window.innerWidth >= 640 && (
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
                    style={{
                      fontSize: "inherit",
                      color: "inherit",
                    }}
                  >
                    {subItem.title}
                  </a>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      );

      if (isExpand === item.id && window.innerWidth < 640) {
        tempNavigation.forEach((subItem) => {
          items.push(
            <div key={subItem.id} className="relative ">
              <a
                href={subItem.url}
                className={`block relative font-code text-sm uppercase bg-gray-100 
                rounded-lg
                text-black font-bold transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold sm:leading-5 xl:px-12 ${
                  activeItem === subItem.id ? "text-green-500" : ""
                }`} 
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                {subItem.title}
              </a>
            </div>
          );
        });
      }
    });
    return items;
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 left-0 w-full border-b border-n-6 lg:backdrop-blur-sm sm:bg-white lg:border-none ${
          openNavigation ? " bg-white " : " bg-white backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          
          <nav
            className={`${
              openNavigation ? "flex bg-white" : "hidden bg-white"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-white`}
          >
            <div className="relative m-30 flex flex-col flex space-x-4 rounded-lg bg-gradient-to-tr max-w-full m-auto items-center justify-center lg:flex-row lg:mr-10">
              {renderNavigationItems()}
            </div>
          </nav>
          <a className="block w-[12rem] xl:mr-80" href="#hero">
            <img width="150" src="https://i.ibb.co/CwW5Q5R/Mahakaal-Logo.png" alt="" />
          </a>
          <a
            href="/enroll"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block uppercase"
          >
            Enroll Now
          </a>
          <Button
            className="hidden lg:flex rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            href="/Contact"
          >
            Contact Us
          </Button>
          <div className="ml-auto lg:hidden">
            <Hamburger toggled={openNavigation} toggle={toggleNavigation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;