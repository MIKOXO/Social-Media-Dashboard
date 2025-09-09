import React from "react";
import ToggleTheme from "../components/ToggleTheme";
import Navbar from "../components/Navbar";
import MainStatCards from "../components/MainStatCards";

const Home = () => {
  return (
    <div className="min-h-screen bg-White dark:bg-BackgroundGray transition-colors duration-300">
      <Navbar />
      <MainStatCards />
    </div>
  );
};

export default Home;
