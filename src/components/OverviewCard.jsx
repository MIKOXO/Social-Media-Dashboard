import React from "react";

const OverviewCard = ({
  headerText,
  platform,
  number,
  statImg,
  stat,
  textColor,
}) => {
  return (
    <div className="bg-CardBgNavy50 dark:bg-CardBgNavy hover:bg-gray-300 dark:hover:bg-slate-700 px-4 py-8 rounded-md shadow-md transition-colors duration-300 cursor-pointer">
      <div className="flex flex-row items-center justify-between px-5">
        <span className="text-Gray650 dark:text-Gray400 font-semibold">
          {headerText}
        </span>
        <img src={platform} />
      </div>
      <div className="flex flex-row items-center justify-between px-5 mt-6">
        <p className="text-LightThemeGray950 dark:text-White text-[40px] font-bold">
          {number}
        </p>
        <div className="flex flex-row items-center gap-1">
          <img src={statImg} className="w-[10px]" />
          <span className={`text-[14px] font-bold ${textColor}`}>{stat}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
