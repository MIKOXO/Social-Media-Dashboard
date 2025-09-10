import React from "react";
import ToggleTheme from "../components/ToggleTheme";
import Navbar from "../components/Navbar";
import MainStatCards from "../components/MainStatCards";
import OverviewCards from "../components/OverviewCards";

const Home = () => {
  return (
    <div className="min-h-screen bg-White dark:bg-BackgroundGray transition-colors duration-300">
      <Navbar />
      <MainStatCards />
      <OverviewCards />
    </div>
  );
};

export default Home;
