import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCategory = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="card-skeleton flex w-full h-full p-[.5rem] rounded-md "
      >
        <div className="left-col mr-[1rem]">
          <Skeleton circle width={40} height={40} />
        </div>
        <div className="right-col flex-1 w-1/2">
          <Skeleton count={2} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    ));
};

export default SkeletonCategory;
