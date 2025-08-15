"use client";

import { useState, useCallback } from "react";
import { Categories } from "../types";
import RecipeList from "./recipes-list";
import CategoryList from "./category-list";

type HomeClientProps = {
  categories: Categories;
};

export default function HomeClient({ categories }: HomeClientProps) {
  const [categoryName, setCategoryName] = useState(categories[0].strCategory);

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
