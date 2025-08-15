"use client";

import { useState, useCallback } from "react";
import { Categories } from "../types";
import RecipeList from "./recipes-list";
import CategoryList from "./category-list"; // Nuevo componente

type HomeClientProps = {
  categories: Categories;
};

export default function HomeClient({ categories }: HomeClientProps) {
  const [categoryName, setCategoryName] = useState(categories[0].strCategory);

  // Memoriza el callback para evitar renders innecesarios
  const handleSetCategoryName = useCallback(
    (name: string) => setCategoryName(name),
    []
  );

  return (
    <div className="flex flex-col gap-10">
      <CategoryList
        categories={categories}
        setCategoryName={handleSetCategoryName}
      />
      <div className="min-h-screen">
        <RecipeList categoryName={categoryName} />
      </div>
    </div>
  );
}
