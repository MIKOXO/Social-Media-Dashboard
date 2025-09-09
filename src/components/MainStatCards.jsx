import React from "react";
import MainStatCard from "./MainStatCard";
import FacebookImg from "../assets/icon-facebook.svg";
import InstaImg from "../assets/icon-instagram.svg";
import TwitterImg from "../assets/icon-twitter.svg";
import YoutubeImg from "../assets/icon-youtube.svg";
import UpArrow from "../assets/icon-up.svg";
import DownArrow from "../assets/icon-down.svg";

const MainStatCards = () => {
  return (
    <section className="mx-auto container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max:sm:space-y-3 gap-7 my-4">
      <MainStatCard
        borderColor={"border-FacebookBlue"}
        platform={FacebookImg}
        username="@nathanf"
        followers="1987"
        stat="12 Today"
        statImg={UpArrow}
        textColor={"text-Green500"}
      />
      <MainStatCard
        borderColor={"border-TwitterBlue"}
        platform={TwitterImg}
        username="@nathanf"
        followers="1044"
        stat="99 Today"
        statImg={UpArrow}
        textColor={"text-Green500"}
      />
      <MainStatCard
        borderColor={"border-[hsl(5,77%,71%)]"}
        platform={InstaImg}
        username="@realnathanf"
        followers="11k"
        stat="1099 Today"
        statImg={UpArrow}
        textColor={"text-Green500"}
      />
      <MainStatCard
        borderColor={"border-YoutubeRed"}
        platform={YoutubeImg}
        username="Nathan F."
        followers="8239"
        stat="144 Today"
        statImg={DownArrow}
        textColor={"text-Red500"}
      />
    </section>
  );
};

export default MainStatCards;
