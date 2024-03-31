import "./SideNav.css";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="w-[100px] mx-auto bg-white rounded-3xl overflow-y-auto">
      <div className="flex flex-col items-center h-[95vh]">
        <div className="pt-[20px] pb-[50px]">
          <Link href="/">
            <img src="/sideNav/img1.png" alt="Dua_Logo" />
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
        <Link href="/">
          <img
            className="pb-[31px] pt-[50px]"
            src="/sideNav/img9.png"
            alt="Support"
          />
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
