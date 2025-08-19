"use client";

import { useEffect } from "react";
import { useStore } from "../stores/store";
import Card from "../ui/card";
import Image from "next/image";
import { MealByCategory } from "../types";
import MessageDisplay from "./message-display";

type RecipeListProps = {
  categoryName: string;
};

export default function RecipeList({ categoryName }: RecipeListProps) {
  const fetchMealsByCategory = useStore((state) => state.fetchMealsByCategory);
  const mealsByCategory = useStore((state) => state.mealsByCategory);
  const fetchMealById = useStore((state) => state.fetchMealById);
  const searchTerm = useStore((state) => state.searchTerm);
  const mealsBySearch = useStore((state) => state.mealsBySearch);
  const searchLoading = useStore((state) => state.fetchMealsBySearchLoading);
  const searchError = useStore((state) => state.fetchMealsBySearchError);

  const fetchMealByCategoryError = useStore(
    (state) => state.fetchMealByCategoryError
  );
  const fetchMealByCategoryLoading = useStore(
    (state) => state.fetchMealByCategoryLoading
  );

  useEffect(() => {
    if (!categoryName) return;

    if (searchTerm.trim() === "") {
      fetchMealsByCategory(categoryName);
    }
  }, [categoryName, searchTerm, fetchMealsByCategory]);

  let recipesToShow: MealByCategory[] = [];

  if (mealsBySearch.length > 0) {
    recipesToShow = mealsBySearch;
  } else if (searchTerm.trim() !== "") {
    recipesToShow = [];
  } else {
    recipesToShow = mealsByCategory;
  }

  return (
    <div>
      {/* Loading */}
      {(searchLoading || fetchMealByCategoryLoading) && (
        <MessageDisplay type="loading" message="Cargando recetas..." />
      )}

      {/* Error */}
      {(searchError || fetchMealByCategoryError) && (
        <MessageDisplay
          type="error"
          message="Ha ocurrido un error al obtener las recetas. Intenta nuevamente."
        />
      )}

      {/* No resultados en búsqueda */}
      {searchTerm.trim() !== "" &&
        recipesToShow.length === 0 &&
        !searchLoading &&
        !searchError && (
          <MessageDisplay
            type="noResults"
            message="No se encontraron recetas."
          />
        )}

      {/* Categoría vacía */}
      {!searchTerm.trim() &&
        recipesToShow.length === 0 &&
        !fetchMealByCategoryLoading &&
        !fetchMealByCategoryError && (
          <MessageDisplay
            type="noResults"
            message="No hay recetas en esta categoría."
          />
        )}

      {/* Grid de recetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {recipesToShow
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
    </div>
  );
}
