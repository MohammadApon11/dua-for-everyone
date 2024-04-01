"use client";
import Settings from "@/components/Settings/Settings";
import MainWrapper from "@/components/mainContent/MainWrapper";
import SideNav from "@/components/sideNav/SideNav";
import { useState } from "react";

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  const handleIsShow = () => {
    setIsShow(!isShow);
    console.log("clieck");
  };

  return (
    <div className="px-6 pt-4 pb-0 flex gap-[33px] fixed w-[100vw]">
      <div className="">
        <SideNav />
      </div>
      <div className="">
        <MainWrapper handleIsShow={handleIsShow} />
      </div>
      <div
        id={`${isShow ? "setting_3" : "setting_2"}`}
        className={`w-[300px] h-[100vh] bg-white rounded-l-[32px] overflow-y-auto border-[0.5px] border-[rgb(226,226,226)]`}
      >
        <Settings handleIsShow={handleIsShow} />
      </div>
    </div>
  );
};

export default Home;
