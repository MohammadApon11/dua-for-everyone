import { useUtilsProvider } from "@/context/UtilsProvider";
import React from "react";

const Settings = () => {
  const { handleSettingShow } = useUtilsProvider();
  return (
    <>
      <div className="overflow-y-hidden w-full">
        <div className="bg-white w-full md:h-[85.5vh] h-[100vh]pb-16   lg:h-screen  xl:h-screen 2xl:w-full 3xl:w-full">
          <div
            className="xl:pt-9 md:pt-5 xl:pb-6 md:pb-2 pt-3
        "
          >
            <p className="text-center text-xl">Settings</p>
          </div>
          <div className="2xl:hidden block">
            <div className="flex items-center justify-end">
              <button
                onClick={() => handleSettingShow()}
                id="hide_for_lg"
                className="text-[#1FA45B] cursor-pointer text-[30px] mr-4 pt-[-20px] font-bold"
              >
                ❎
              </button>
            </div>
          </div>
          <div className="sm:pb-4 w-full">
            <div className="mx-3 my-4">
              <div className="border-x-devider border-x-1 border-b-1 rounded-lg dark:border-none ">
                <div className="cursor-pointer">
                  <div className="-lite transition duration-300 delay-[10ms] bg-[#F7F8FA] flex flex-row w-full rounded-lg">
                    <div className="bg-[#1FA45B] w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/language.png " alt="language" />
                      </div>
                      <p className="font-medium  text-start text-base leading-5">
                        Language Settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="py-6 rounded-b-lg">
                    <div className="flex flex-row gap-x-3 mx-4 justify-center">
                      <button className="bg-[#1FA45B] text-white rounded-md w-29 h-10 text-sm w-full sm:w-full">
                        English
                      </button>
                      <button className=" text-black border border-solid border-[#cccdcf] rounded-md w-29 h-10 text-sm w-full sm:w-full">
                        বাংলা
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-[#F7F8FA] flex flex-row w-full rounded-lg ">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/general.png " alt="general" />
                      </div>
                      <p className="text-mute-grey-200   text-start text-base leading-5">
                        General Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-[#F7F8FA] flex flex-row w-full rounded-lg ">
                    <div className="w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/menu.png" alt="font" />
                      </div>
                      <p className="text-mute-grey-200   text-start text-base leading-5 ">
                        Font Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-[#F7F8FA] flex flex-row w-full rounded-lg ">
                    <div className="w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/menu-2.png " alt="font" />
                      </div>
                      <p className="text-[#1FA45B] text-start text-base leading-5 ">
                        Appearance Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
