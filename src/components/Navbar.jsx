import React from "react";
import ToggleTheme from "./toggleTheme";

const Navbar = () => {
  return (
    <div className="rounded-b-3xl bg-TopbgBlue dark:bg-TopBgGray transition-colors duration-300">
      <header className="container mx-auto pb-32 pt-6 px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo Text */}
        <div className="flex flex-col">
          <h1 className="text-[24px] sm:text-[32px] font-bold text-LightThemeGray950 dark:text-White transition-colors duration-300">
            Social Media Dashboard
          </h1>
          <span className="text-Gray650 dark:text-Gray400 font-semibold transition-colors duration-300">
            Total Followers: 23,004
          </span>
        </div>

        {/* Horizontal line for small devices */}
        <div className="w-full sm:hidden px-2">
          <span className="block w-full h-[0.5px] opacity-30 bg-Gray400 my-6"></span>
        </div>

        {/* Toggle Button */}
        <ToggleTheme />
      </header>
    </div>
  );
};

export default Navbar;
