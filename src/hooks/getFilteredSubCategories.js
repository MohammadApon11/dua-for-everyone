// Import React from the 'react' library
import React from "react";

// Define a custom function 'getFilteredSubCategories' to fetch filtered subcategories from the server
const getFilteredSubCategories = async (cat_id) => {
  try {
    // Make a GET request to the "/api/filteredSubCategories" endpoint with the cat_id as a query parameter
    const response = await fetch(
      `/api/filteredSubCategories?cat_id=${cat_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch filtered subcategories");
    }

    // Parse the JSON response and return the promise
    return await response.json();
  } catch (error) {
    console.error("Error fetching filtered subcategories:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export default getFilteredSubCategories;
