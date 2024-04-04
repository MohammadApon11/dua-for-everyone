"use client";
import GoToTop from "@/components/GoToTop/GoToTop";
import Settings from "@/components/Settings/Settings";
import MainWrapper from "@/components/mainContent/MainWrapper";
import SideNav from "@/components/sideNav/SideNav";
import { useUtilsProvider } from "@/context/UtilsProvider";
import Link from "next/link";

const Home = () => {
  const {
    isSettingShow,
  } = useUtilsProvider();
  return (
    <div className="relative">
      <div className="xl:px-6 pb-0 flex xl:gap-[33px] fixed w-full">
        <div className="xl:pt-4">
          <SideNav />
          <div className="absolute w-full lg:h-28 md:h-20 h-16 lg:bottom-20 max-lg:bottom-[180px] bg-white z-10 lg:pt-5 md:pt-4 pt-2 md:rounded-tl-[70px] rounded-tl-[30px]  md:rounded-tr-[70px] rounded-tr-[30px] for-shadow max-xl:block hidden">
            <div className="flex items-center justify-evenly">
              <Link
                href="/"
                className="xs:w-[38px] w-[30px]   xs:h-[38px] h-[30px]  flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="xs:w-4 w-3" src="/sideNav/img2.png" alt="" />
              </Link>
              <Link
                href="/all-duas"
                className="xs:w-[38px] w-[30px] xs:h-[38px] h-[30px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="xs:w-4 w-3" src="/sideNav/img3.png" alt="" />
              </Link>
              <Link
                href="/memorize"
                className="xs:w-[38px] w-[30px] xs:h-[38px] h-[30px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="xs:w-4 w-3" src="/sideNav/img4.png" alt="" />
              </Link>
              <Link
                href="/bookmark"
                className="xs:w-[38px] w-[30px] xs:h-[38px] h-[30px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="xs:w-4 w-3" src="/sideNav/img5.png" alt="" />
              </Link>
              <Link
                href="/ruqyah"
                className="xs:w-[38px] w-[30px] xs:h-[38px] h-[30px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
              >
                <img className="xs:w-4 w-3" src="/sideNav/img6.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:pt-4">
          <MainWrapper />
        
        </div>
        <div
          className={`overflow-y-auto absolute transition-all duration-300 ${
            isSettingShow ? "right-0" : "-right-[220%]"
          }
          `}
        >
          <div className="flex items-center">
            <div className="xl:w-[70vw] lg:w-[60vw] sm:w-[60vw] xs:w-[30vw] w-0 h-[100vh] bg-black opacity-40 z-[100]"></div>
            <div className="xl:w-[30vw] lg:w-[40vw] sm:w-[40vw] xs:w-[70vw] w-[100vw] h-[100vh] z-20">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
