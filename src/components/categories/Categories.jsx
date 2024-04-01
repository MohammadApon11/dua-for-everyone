import React, { useState, useEffect } from "react";
import SingleCategoris from "./SingleCategoris";
import getCategories from "@/hooks/getCategories";
import SkeletonCategory from "./SkeletonCategory";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    // Call getCategories and handle the resolved promise
    getCategories().then((data) => {
      // Do something with the fetched categories
      const { categories, loading } = data;
      setCategories(categories);
      setFilteredCategories(categories); // Initialize filtered categories with all categories
      setLoadingData(loading);
    });
  }, []);

  // Event handler for handling changes in the search input
  const handleChange = (e) => {
    const inputText = e.target.value;
    setFilterText(inputText);

    // Filter categories based on the input text
    const filteredCategory = categories.filter((category) =>
      category.cat_name_en.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredCategories(filteredCategory);
  };

  return (
    <>
      <div className="bg-[#1FA45B] fixed h-[57px] m-0 w-[318px] flex items-center justify-center rounded-tl-md rounded-tr-md">
        <span className="text-white font-semibold text-[17px]">Categories</span>
      </div>
      <div className="mt-14">
        <div className="mx-auto rounded-md w-[292px] pt-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <img src="/header/search.png" alt="" />
            </span>
            <input
              value={filterText}
              onChange={handleChange}
              name="category"
              type="text"
              className="h-12 border-[1px] border-[#E8F0F5] w-[294px] placeholder:text-sm bg-white rounded-md pl-12 shadow-sm focus:outline-none focus:ring-[#1FA45B] focus:ring-1 sm:text-sm dark:placeholder:text-[#96a2b4]"
              placeholder="Search by Categories"
            />
          </div>
        </div>
        <div className="h-[62vh] scroll-smooth overflow-y-auto pb-8 mb-4">
          <div className="mt-4 px-2 scroll-mt-4">
            {loadingData ? (
              <SkeletonCategory cards={10} />
            ) : (
              filteredCategories?.map((category, index) => (
                <SingleCategoris
                  className="text-center"
                  key={index}
                  category={category}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
