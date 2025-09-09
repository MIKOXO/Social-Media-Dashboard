import React from "react";

const MainStatCard = ({
  platform,
  username,
  followers,
  stat,
  statImg,
  borderColor,
  textColor,
}) => {
  return (
    <div
      className={`bg-CardBgNavy50 dark:bg-CardBgNavy hover:bg-gray-300 dark:hover:bg-slate-700 px-4 py-8 rounded-md shadow-md -mt-20 border-t-[6px] ${borderColor} transition-colors duration-300 cursor-pointer`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center gap-2">
          <img src={platform} className="w-[23px]" />
          <span className="text-Gray650 dark:text-Gray400 text-[14px]">
            {username}
          </span>
        </div>
        <h1 className="text-LightThemeGray950 dark:text-White text-[56px] font-bold my-2">
          {followers}
        </h1>
        <p className="text-Gray650 dark:text-Gray400 uppercase tracking-[6px] opacity-70">
          Followers
        </p>

        <div className="flex flex-row items-center gap-2 mt-3">
          <img src={statImg} className="w-[10px]" />
          <span className={`text-[14px] font-bold ${textColor}`}>{stat}</span>
        </div>
      </div>
    </div>
  );
};

export default MainStatCard;
