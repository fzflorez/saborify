"use client";

import { ChangeEvent } from "react";
import { useStore } from "../stores/store";

export default function SearchBar() {
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const fetchMealsBySearch = useStore((state) => state.fetchMealsBySearch);
  const clearSearchResults = useStore((state) => state.clearSearchResults);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      fetchMealsBySearch(value);
    } else {
      clearSearchResults();
    }
  };

  return (
    <div className="flex w-full max-w-lg rounded-full overflow-hidden shadow-lg mt-2">
      <input
        type="text"
        placeholder="Search by recipe name..."
        className="w-full px-5 py-3 bg-white focus:outline-none text-gray-700"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
