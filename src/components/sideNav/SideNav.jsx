import React from "react";
import Link from "next/link";
import "./SideNav.css";
import Image from "next/image";

const SideNav = () => {
  return (
    <div className="xl:block hidden">
      <div className="w-[110px] flex items-center justify-center bg-white rounded-3xl overflow-y-auto">
        <div className="flex flex-col items-center h-[95vh]">
          <div className="mt-[20px] mb-[40px]">
            <Link href="/">
              <img className="" src="/sideNav/img1.png" alt="Dua_Logo" />
            </Link>
          </div>
          <div className="flex flex-col gap-[27px]">
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
            <Link
              href="/dua-info"
              className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
            >
              <img className="w-4" src="/sideNav/img7.png" alt="" />
            </Link>
            <Link
              href="/books"
              className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full"
            >
              <img className="w-4" src="/sideNav/img8.png" alt="" />
            </Link>
          </div>
          <img
            className="mb-[31px] mt-[40px] cursor-pointer"
            src="/sideNav/img9.png"
            alt="Support"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
