import React from "react";
import OverviewCard from "./OverviewCard";
import FacebookImg from "../assets/icon-facebook.svg";
import InstaImg from "../assets/icon-instagram.svg";
import TwitterImg from "../assets/icon-twitter.svg";
import YoutubeImg from "../assets/icon-youtube.svg";
import UpArrow from "../assets/icon-up.svg";
import DownArrow from "../assets/icon-down.svg";

const OverviewCards = () => {
  return (
    <div className="mx-auto container px-4 mt-10 transition-colors duration-300 pb-10">
      <h1 className="text-[24px] sm:text-[32px] font-bold text-LightThemeGray950 dark:text-White ">
        Overview - Today
      </h1>
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max:sm:space-y-3 gap-7">
        <OverviewCard
          headerText="Page Views"
          platform={FacebookImg}
          number={87}
          stat="3%"
          statImg={UpArrow}
          textColor="text-Green500"
        />
        <OverviewCard
          headerText="Likes"
          platform={FacebookImg}
          number={52}
          stat="2%"
          statImg={DownArrow}
          textColor="text-Red500"
        />
        <OverviewCard
          headerText="Likes"
          platform={InstaImg}
          number={5462}
          stat="2557%"
          statImg={UpArrow}
          textColor="text-Green500"
        />
        <OverviewCard
          headerText="Profile Views"
          platform={InstaImg}
          number={"52k"}
          stat="1375%"
          statImg={UpArrow}
          textColor="text-Green500"
        />
        <OverviewCard
          headerText="Retweets"
          platform={TwitterImg}
          number={117}
          stat="303%"
          statImg={UpArrow}
          textColor="text-Green500"
        />
        <OverviewCard
          headerText="Likes"
          platform={TwitterImg}
          number={507}
          stat="553%"
          statImg={UpArrow}
          textColor="text-Green500"
        />
        <OverviewCard
          headerText="Likes"
          platform={YoutubeImg}
          number={107}
          stat="19%"
          statImg={DownArrow}
          textColor="text-Red500"
        />
        <OverviewCard
          headerText="Total Views"
          platform={YoutubeImg}
          number={1407}
          stat="12%"
          statImg={DownArrow}
          textColor="text-Red500"
        />
      </section>
    </div>
  );
};

export default OverviewCards;
