"use client";

import { useEffect } from "react";
import { useStore } from "../stores/store";
import Card from "../ui/card";
import Image from "next/image";
import { MealByCategory } from "../types";

type RecipeListProps = {
  categoryName: string;
};

export default function RecipeList({ categoryName }: RecipeListProps) {
  const fetchMealsByCategory = useStore((state) => state.fetchMealsByCategory);
  const mealsByCategory = useStore((state) => state.mealsByCategory);
  const fetchMealById = useStore((state) => state.fetchMealById);
  const fetchMealByCategoryError = useStore(
    (state) => state.fetchMealByCategoryError
  );
  const fetchMealByCategoryLoading = useStore(
    (state) => state.fetchMealByCategoryLoading
  );

  useEffect(() => {
    if (!categoryName) return;
    fetchMealsByCategory(categoryName);
  }, [categoryName, fetchMealsByCategory]);

  if (fetchMealByCategoryLoading) {
    return <div>Cargando recetas de la categoría {categoryName}...</div>;
  }

  if (fetchMealByCategoryError) {
    return <div>Ha ocurrido un error al obtener las recetas.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {mealsByCategory
          .filter(
            (meal): meal is MealByCategory & { strMealThumb: string } =>
              meal.strMealThumb !== null
          )
          .map((meal) => (
            <button
              key={meal.idMeal}
              onClick={() => fetchMealById(meal.idMeal!)}
            >
              <Card className="rounded-lg overflow-hidden hover:scale-[1.03] transition duration-300 ease-in-out">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal ?? ""}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                  priority
                />
                <h3 className="text-lg font-bold text-gray-700 truncate pt-4 px-2">
                  {meal.strMeal}
                </h3>
              </Card>
            </button>
          ))}
      </div>
    </>
  );
}
