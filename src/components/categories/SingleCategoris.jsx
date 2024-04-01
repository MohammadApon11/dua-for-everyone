"use client";
import React, { useEffect, useState } from "react";
import SubCategories from "../subCategories/SubCategories";
import { useCatId } from "@/provider/CatIdProvider";
import getSubCategories from "@/hooks/getSubCategories";

const SingleCategoris = ({ category }) => {
  const [subCategories, setSubCategories] = useState([]);
  const { cat_name_en, no_of_subcat, no_of_dua, cat_id } = category;
  const { catId, setCatId } = useCatId() || {};
  const [loadingData, setLoadingData] = useState(true);

  const isOpen = cat_id === catId;
  useEffect(() => {
    getSubCategories().then((data) => {
      setSubCategories(data?.subcategories);
      setLoadingData(data?.loading);
    });
  }, []);

  const handleOpen = () => {
    setCatId(cat_id);
  };

  const filteredSubCategories = subCategories.filter(
    (c) => c.cat_id === cat_id
  );

  return (
    <>
      <a className="pt-2" onClick={handleOpen} href={`#${cat_id}`}>
        <div
          onClick={handleOpen}
          className={`mx-auto flex items-center justify-between gap-2 p-[10px] rounded-[10px] hover:bg-[#E8F0F5] cursor-pointer ${
            isOpen ? "bg-[#E8F0F5]" : ""
          }
        `}
        >
          <div className="flex items-center gap-2">
            <div className="p-[10px] bg-[#CFE0E5] rounded-[10px] flex items-center justify-center">
              <img src={`/category/${category?.cat_icon}.svg`} alt="" />
            </div>
            <div>
              <span className="text-[16px] block font-semibold">
                {cat_name_en}
              </span>
              <span className="text-[#7E7E7E] text-[14px]">
                Subcategory: {no_of_subcat}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#E8F0F5] w-[1px] mr-3 h-12"></div>
            <div>
              <span className="text-[16px] block font-semibold">
                {no_of_dua}
              </span>
              <span className="text-[#7E7E7E] text-[14px]">Duas</span>
            </div>
          </div>
        </div>
      </a>

      <div className={`${isOpen ? "block" : "hidden"}`}>
        {filteredSubCategories.map((subCategory, index) => (
          <SubCategories
            key={index}
            subCategory={subCategory}
            cat_id={cat_id}
          />
        ))}
      </div>
    </>
  );
};

export default SingleCategoris;
