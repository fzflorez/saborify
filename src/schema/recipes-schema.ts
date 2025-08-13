import z from "zod";

export const CategoryResponseSchema = z.object({
  idCategory: z.string(),
  strCategory: z.string(),
});

export const CategoriesResponseSchema = z.array(CategoryResponseSchema);

export const MealResponseSchema = z.object({
  idMeal: z.string().nullable(),
  strMeal: z.string().nullable(),
  strMealThumb: z.string().nullable(),
});

export const MealsResponseSchema = z.array(MealResponseSchema);
