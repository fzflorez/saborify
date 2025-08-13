"use client";

import { useState } from "react";
import { Categories } from "../types";
import CategoryButton from "../ui/category-button";
import RecipeList from "./recipes-list";

type HomeClientProps = {
  categories: Categories;
};

export default function HomeClient({ categories }: HomeClientProps) {
  const [categoryName, setCategoryName] = useState(categories[0].strCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <CategoryButton
            key={category.idCategory}
            category={category}
            setCategoryName={setCategoryName}
          />
        ))}
      </div>

      <RecipeList categoryName={categoryName} />
    </div>
  );
}
