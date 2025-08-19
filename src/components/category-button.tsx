"use client";

import { memo } from "react";
import { Category } from "../types";

type CategoryButtonProps = {
  category: Category;
  setCategoryName: (name: string) => void;
};

const CategoryButtton = memo(function CategoryButton({
  category,
  setCategoryName,
}: CategoryButtonProps) {
  const handleClick = () => {
    setCategoryName(category.strCategory);
  };

  return (
    <button
      type="button"
      className="px-5 py-2 rounded-full bg-yellow-700 hover:bg-yellow-800 transition duration-300 ease-in-out"
      onClick={handleClick}
    >
      <span className="text-white">{category.strCategory}</span>
    </button>
  );
})

export default CategoryButtton;