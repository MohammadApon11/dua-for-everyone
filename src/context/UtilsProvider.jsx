"use client";
import React, { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const [isSettingShow, setSettingShow] = useState(false);
  const [isCategoriesShow, setCategoriesShow] = useState(false);
  const [detailsShow, setDetailsShow] = useState(false);

  const handleSettingShow = () => {
    setSettingShow((prev) => !prev);
  };

  const handleCategoriesShow = () => {
    setCategoriesShow((prev) => !prev);
  };

  const handleProfileSetting = () => {
    setDetailsShow((prev) => !prev);
  };
  
  return (
    <UtilsContext.Provider
      value={{
        isSettingShow,
        isCategoriesShow,
        detailsShow,
        handleSettingShow,
        handleCategoriesShow,
        handleProfileSetting,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

// Step 3: Create a custom hook to use the context
export const useUtilsProvider = () => {
  const context = useContext(UtilsContext);
  return context;
};
