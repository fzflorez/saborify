"use client";

import { useEffect, useState } from "react";
import { useStore } from "../stores/store";
import Card from "../ui/card";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { MealByCategory } from "../types";

type RecipeListProps = {
  categoryName: string;
};

export default function RecipeList({ categoryName }: RecipeListProps) {
  const fetchMealsByCategory = useStore((state) => state.fetchMealsByCategory);
  const mealsByCategory = useStore((state) => state.mealsByCategory);
  const fetchMealByCategoryError = useStore(
    (state) => state.fetchMealByCategoryError
  );
  const fetchMealByCategoryLoading = useStore(
    (state) => state.fetchMealByCategoryLoading
  );

  const [selectedMeal, setSelectedMeal] = useState<MealByCategory | null>(null);

  useEffect(() => {
    if (!categoryName) return;
    fetchMealsByCategory(categoryName);
  }, [categoryName, fetchMealsByCategory]);

  if (fetchMealByCategoryLoading) {
    return <div>Cargando recetas de la categoría {categoryName}...</div>;
  }

  if (fetchMealByCategoryError) {
    return (
      <div>
        Ha ocurrido un error al intentar obtener las recetas de la categoría
        seleccionada.
      </div>
    );
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
              onClick={() => setSelectedMeal(meal)}
            >
              <Card
                className="rounded-lg overflow-hidden hover:scale-[1.03] transition duration-300 ease-in-out"
              >
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal ?? ""}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-700 truncate pt-4 px-2">
                  {meal.strMeal}
                </h3>
              </Card>
            </button>
          ))}
      </div>

      {/* Modal con Headless UI */}
      <Dialog
        open={selectedMeal !== null}
        onClose={() => setSelectedMeal(null)}
        className="relative z-50"
      >
        {/* Fondo oscuro */}
        <div className="fixed inset-0 bg-black/60"/>

        {/* Contenedor centrado */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
            {selectedMeal && (
              <>
                <Dialog.Title className="text-xl font-bold mb-4">
                  {selectedMeal.strMeal}
                </Dialog.Title>
                <Image
                  src={selectedMeal.strMealThumb!}
                  alt={selectedMeal.strMeal ?? ""}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded"
                />
                <p className="mt-4 text-gray-700">
                  Aquí iría la descripción o ingredientes de la receta.
                </p>
                <button
                  className="mt-6 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800"
                  onClick={() => setSelectedMeal(null)}
                >
                  Cerrar
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
