import React, { useState } from "react";
import "./Header.css";
import { settingsData } from "../duas/colorData";

const Header = ({ handleIsShow }) => {
  const [isShowk, setIsShow] = useState(false);
  const handleProfileSetting = () => {
    setIsShow(!isShowk);
  };
  return (
    <>
      <div className="flex w-full justify-between 2xl:h-[51px] 2xl:pt-[20px] max-xl:bg-white max-xl:pt-3 max-xl:pb-2 max-xl:px-4">
        {/* for upper than 1280px */}
        <div className="flex items-center justify-between">
          <span className="text-[#393939] font-semibold text-[24px] xl:block hidden">
            Duas Page
          </span>
          <div className="max-xl:block hidden">
            <div className="flex items-center gap-1">
              <img className="w-20" src="/img1.png" alt="" />
              <p className="text-xl">Dua & Ruqyah</p>
            </div>
          </div>
        </div>
        <div className="flex items-center 2xl:gap-10 gap-7">
          <div className="relative w-[371px] h-[52px]">
            <input
              className="dark:placeholder:text-[#96a2b4] max-xl:placeholder:text-[#737d8b] w-[100%] h-[100%] placeholder:text-sm  rounded-md px-4 max-xl:bg-[#ebeef2] shadow-sm focus:outline-none focus:ring-1 ring-[#1FA45B] sm:text-sm"
              type="text"
              placeholder="Search by Dua Name"
            />
            <button className="2xl:bg-[#F3F4F6] bg-white absolute top-[12%] right-2 rounded-md py-[10px] px-[15px]">
              <img className="" src="/header/search.png" alt="" />
            </button>
          </div>
          <img
            onClick={() => handleIsShow()}
            className="cursor-pointer max-xl:block hidden"
            src="/header/settings.svg"
            alt=""
          />
          <div
            onClick={handleProfileSetting}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src="/header/profile.png" alt="" />
            <img src="/header/down-arrow.png" alt="" />
          </div>
          <div
            className={`absolute lg:-left-[230px] top-[70px] py-6 px-3 bg-white border transition-all duration-300 rounded-2xl w-[300px] ${
              isShowk ? "opacity-100 z-10" : "opacity-0 -z-10"
            }`}
          >
            <ul className="flex flex-col relative">
              {settingsData.map((item, index) => (
                <li
                  className="flex itece gap-3 pl-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg"
                  key={index}
                >
                  <img src={item.icon} alt="" />
                  <p className="text-[15px]">{item.name}</p>
                </li>
              ))}
              <div className="bg-white w-8 h-8 rotate-45 absolute -top-9 right-4"></div>
            </ul>
          </div>
          <img
            onClick={() => handleIsShow()}
            className="cursor-pointer xl:block hidden 2xl:hidden"
            src="/header/settings.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
