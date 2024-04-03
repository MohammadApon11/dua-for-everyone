"use client";
import Settings from "@/components/Settings/Settings";
import MainWrapper from "@/components/mainContent/MainWrapper";
import SideNav from "@/components/sideNav/SideNav";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  const handleIsShow = () => {
    setIsShow(!isShow);
    console.log("clieck");
  };

  return (
    <div className="max-xl:relative">
      <div className="xl:px-6 xl:pt-4 pb-0 flex xl:gap-[33px] fixed w-full">
        <div className="">
          <SideNav />
          <div className="absolute w-full h-36 bottom-20 bg-white z-10 pt-10 rounded-tl-[70px] rounded-tr-[70px] for-shadow max-xl:block hidden">
            <div className="flex items-center justify-evenly">
              <Link
                href="/"
                className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="w-4" src="/sideNav/img2.png" alt="" />
              </Link>
              <Link
                href="/all-duas"
                className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="w-4" src="/sideNav/img3.png" alt="" />
              </Link>
              <Link
                href="/memorize"
                className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="w-4" src="/sideNav/img4.png" alt="" />
              </Link>
              <Link
                href="/bookmark"
                className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="w-4" src="/sideNav/img5.png" alt="" />
              </Link>
              <Link
                href="/ruqyah"
                className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="w-4" src="/sideNav/img6.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <MainWrapper handleIsShow={handleIsShow} />
        </div>
        <div
          id={`${isShow ? "setting_3" : "setting_2"}`}
          className={`w-[100vw] h-[100vh] rounded-l-[32px] overflow-y-auto border-[0.5px] border-[rgb(226,226,226)] z-20 flex items-center`}
        >
          <div className="w-[70vw] h-[100vh] bg-black opacity-40"></div>
          <div className="w-[30vw]">
            <Settings handleIsShow={handleIsShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
