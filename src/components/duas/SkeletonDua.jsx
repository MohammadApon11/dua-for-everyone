import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const SkeletonDua = () => {
  return (
    <div className="card-skeleton w-full h-full">
      <div className="">
        <Skeleton count={1} width="70%" />
        <div className="mt-10">
          <div className="flex">
            <Skeleton circle width={50} height={50} />
          </div>
          <div className="mt-5">
            <Skeleton count={1} width="70%" />
            <Skeleton count={1} />
            <Skeleton count={1} width="50%" />
            <div className="mt-5">
              <Skeleton circle width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Skeleton count={1} width="70%" />
        <div className="mt-10">
          <div className="flex">
            <Skeleton circle width={50} height={50} />
          </div>
          <div className="mt-5">
            <Skeleton count={1} width="70%" />
            <Skeleton count={2} />
            <Skeleton count={1} width="50%" />
            <div className="mt-5">
              <Skeleton circle width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDua;
