
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { RxCaretDown } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Design/SVG/Button';
import { navigation } from '../utils/index';

const Navbar = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isExpand, setIsExpand] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

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
    setActiveItem(item.id);
    if (item.Expand && window.innerWidth < 640) {
      setIsExpand(isExpand === item.id ? null : item.id);
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
    return navigation.map((item) => (
      <div
        key={item.id}
        className="relative"
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={item.url}
          onClick={(e) => handleClick(e, item)}
          className={`block relative font-code text-2xl uppercase text-indigo-500 font-bold transition-colors hover:text-indigo-600 ${item.onlyMobile ? 'lg:hidden' : ''
            } px-6 py-6 md:py-8 lg:-mr-9 mt-2 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'sm:text-n-1/50'
            } sm:leading-5 sm:hover:text- xl:px-12 ${activeItem === item.id ? 'text-indigo-600' : ''
            }`}
        >
          {item.title}
          {item.Expand && (
            <RxCaretDown className="absolute right-0 top-1/2 transform -translate-y-1/2 lg:right-4" />
          )}
        </Link>
        {item.Expand && isExpand === item.id && window.innerWidth >= 640 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute right-0 left-0 bg-white shadow-lg"
            >
              {item.submenu?.map((subItem) => (
                <Link
                  key={subItem.id}
                  to={subItem.url}
                  className="block py-2 px-4 text-black hover:bg-gray-200"
                  style={{ fontSize: 'inherit', color: 'inherit' }}
                >
                  {subItem.title}
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
        {isExpand === item.id && window.innerWidth < 640 && item.submenu?.map((subItem) => (
          <div key={subItem.id} className="relative">
            <Link
              to={subItem.url}
              className={`block relative font-code text-sm uppercase bg-gray-100 rounded-lg text-black font-bold transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold sm:leading-5 xl:px-12 ${activeItem === subItem.id ? 'text-green-500' : ''
                }`}
              style={{ borderBottom: '1px solid #e5e7eb' }}
            >
              {subItem.title}
            </Link>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className={`fixed top-0 z-50 left-0 w-full border-b border-n-6 lg:backdrop-blur-sm sm:bg-white lg:border-none ${openNavigation ? ' bg-white ' : ' bg-white backdrop-blur-sm'}`}>
      <div className="flex items-center justify-between px-5 xl:px-10 max-lg:py-4 lg:px-7.5">
        <a className="block xl:mr-80 w-[8rem] lg:w-[6rem]" href="#hero">
          <img
            src="https://i.ibb.co/CwW5Q5R/Mahakaal-Logo.png"
            alt="Mahakaal Logo"
            className="w-full h-auto"
          />
        </a>
        <nav className={`${openNavigation ? 'flex bg-white' : 'hidden bg-white'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-white`}>
          <div className="flex relative flex-col justify-center items-center m-auto space-x-4 max-w-full bg-gradient-to-tr rounded-lg lg:flex-row lg:mr-10 m-30">
            {renderNavigationItems()}
            <div className="lg:hidden flex flex-col items-center space-y-4 mt-4">
              <a
                href="/enroll"
                className="uppercase text-blue-800 font-bold transition-colors button text-n-1/50 hover:text-n-1"
              >
                Enroll Now
              </a>
              <Button
                className="py-3 px-6 font-semibold text-black uppercase bg-white rounded-2xl border-2 border-black border-dashed transition-all duration-300 hover:rounded-md active:rounded-2xl active:shadow-none hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px]"
                href="/Contact"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/enroll"
            className="   font-bold  text-7xl   uppercase transition-colors button text-n-1/50 hover:text-n-1"
          >
            Enroll Now
          </a>
          <Button
            className="py-3 px-6 font-semibold text-black uppercase bg-white rounded-2xl border-2 border-black border-dashed transition-all duration-300 hover:rounded-md active:rounded-2xl active:shadow-none hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px]"
            href="/Contact"
          >
            Contact Us
          </Button>
        </div>
        <div className="ml-auto lg:hidden">
          <Hamburger toggled={openNavigation} toggle={toggleNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
