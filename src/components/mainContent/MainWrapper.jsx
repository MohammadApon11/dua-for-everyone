import Header from "../header/Header";
import Categories from "../categories/Categories";
import Settings from "../Settings/Settings";
import "./MainWrapper.css";
import Dua from "../duas/Dua";
import { useUtilsProvider } from "@/context/UtilsProvider";
import { HiBars3 } from "react-icons/hi2";
import GoToTop from "../GoToTop/GoToTop";
import { useEffect, useRef } from "react";

const MainWrapper = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("goToTopBtn");
      if (containerRef?.current?.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    containerRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { isCategoriesShow, handleCategoriesShow } = useUtilsProvider();

  return (
    <div className="grid grid-cols-6 max-lg:relative">
      <div className="col-span-6">
        <Header />
      </div>
      <div className="col-span-6 w-full my-5 max-lg:block hidden">
        <div className="px-5 bg-white mx-5 rounded-xl py-4 flex items-center gap-2">
          <HiBars3
            onClick={handleCategoriesShow}
            className="text-2xl cursor-pointer"
          />
          <p className="text-gray-600 ">Dua&apos;s importance</p>
        </div>
      </div>
      <div className="col-span-6 lg:mt-[27px] flex xl:gap-[33px] gap-4 max-xl:px-5">
        <div
          className={`sm:w-[320px] w-[100vw] bg-white overflow-x-hidden lg:h-[80vh] h-[100vh] rounded-[10px] overflow-y-auto border-[0.5px] p-0 border-[#E2E2E2] max-lg:absolute lg:block transition-all duration-300 ${
            isCategoriesShow ? "left-0 top-0" : "-left-[220%] top-0"
          }`}
        >
          <Categories />
        </div>

        <div
          ref={containerRef}
          className="h-[100vh] scroll-smooth flex-1 overflow-y-auto"
        >
          <Dua />{" "}
          <div className="absolute right-12 top-[83vh] max-lg:block hidden">
            <GoToTop containerRef={containerRef} />
          </div>
        </div>

        <div
          id="setting_1"
          className=" bg-white rounded-[32px] h-[80vh] overflow-hidden border-[0.5px] border-[rgb(226,226,226)] 2xl:block hidden"
        >
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
