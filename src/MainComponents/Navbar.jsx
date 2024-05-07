import { BrickWallIcon } from "lucide-react";

const navLists = ["Home", "Yoga Courses", "Retreat", "Photo Gallery"];
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={BrickWallIcon} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <div className=" hidden lg:inline-block w-18 h-12">Contact Us </div>
          <div className="w-18 h-12">Enroll Now</div>

          <div className=" hamburgur md:hidden ">
            <AlignJustify />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
