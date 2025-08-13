import { useEffect } from "react";
import { useStore } from "../stores/store";

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

  useEffect(() => {
    if (!categoryName) return;
    fetchMealsByCategory(categoryName);
  }, [categoryName]);

  if (fetchMealByCategoryLoading) {
    return <div>Cargando recetas de la categoría {categoryName}...</div>;
  }

  if (fetchMealByCategoryError) {
    return (
      <div>
        A ocurrido un error al intentar obtener los recetas de la categoría
        seleccionada.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 my-8">
      <div>
        {mealsByCategory.map((meal) => (
          <div key={meal.idMeal}>{meal.strMeal}</div>
        ))}
      </div>
    </div>
  );
}
