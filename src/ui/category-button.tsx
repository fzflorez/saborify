"use client";

import { Category } from "../types";

export default function CategoryButton({ category }: { category: Category }) {
  return (
    <button
      key={category.idCategory}
      className="px-5 py-2 rounded-full bg-yellow-700 hover:bg-yellow-800 transition duration-300 ease-in-out"
      onClick={() => console.log(`Categoría: ${category.strCategory}`)}
    >
      <span className="text-white">{category.strCategory}</span>
    </button>
  );
}
