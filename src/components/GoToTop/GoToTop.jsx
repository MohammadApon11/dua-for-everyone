"use client";
// GoToTop.js
import React from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const GoToTop = ({ containerRef }) => {
  const goToTop = () => {
    containerRef.current.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      className="px-2 rounded-lg py-2 bg-green-500 text-white"
      onClick={goToTop}
      style={{ display: "none" }} // Initially hide the button
      id="goToTopBtn"
    >
      <RiArrowUpDoubleLine className="text-2xl" />
    </button>
  );
};

export default GoToTop;
