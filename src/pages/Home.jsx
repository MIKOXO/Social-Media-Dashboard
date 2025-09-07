import React from "react";
import ToggleTheme from "../components/ToggleTheme";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-White dark:bg-BackgroundGray transition-colors duration-300">
      <Navbar />
    </div>
  );
};

export default Home;
