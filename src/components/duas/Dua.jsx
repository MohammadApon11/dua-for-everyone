"use client";
import { useCatId } from "@/provider/CatIdProvider";
import React, { useEffect, useState } from "react";
import Duas from "./Duas";
import getSubCategories from "@/hooks/getSubCategories";
import SkeletonDua from "./SkeletonDua";

const Dua = () => {
  // State variables for subCategories and filter text
  const [subCategories, setSubCategories] = useState([]);
  // Destructuring assignment to extract 'catId' from the result of the 'useCatId' hook
  const { catId } = useCatId() || {};
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    // Call getCategories and handle the resolved promise
    getSubCategories().then((data) => {
      // Do something with the fetched categories
      setSubCategories(data?.subcategories);
      setLoadingData(data?.loading);
    });
  }, []);

  // Filtering the list of sub-categories based on the 'catId' obtained from the hook
  const filteredSubCategories = subCategories?.filter(
    (subCategory) => subCategory.cat_id === catId
  );

  return (
    <div
      className="w-full
     pb-44"
    >
      <div className="">
        {loadingData ? (
          <SkeletonDua />
        ) : (
          filteredSubCategories?.map((subCategory, index) => (
            <Duas key={index} subCategory={subCategory} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dua;
