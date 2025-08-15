import { memo } from "react";
import { Categories } from "../types";
import CategoryButton from "./category-button";

type CategoryListProps = {
  categories: Categories;
  setCategoryName: (name: string) => void;
};

const CategoryList = memo(function CategoryList({
  categories,
  setCategoryName,
}: CategoryListProps) {
  return (
    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <CategoryButton
          key={category.idCategory}
          category={category}
          setCategoryName={() => setCategoryName(category.strCategory)}
        />
      ))}
    </div>
  );
});

export default CategoryList;
