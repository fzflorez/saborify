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

export const RecipeResponseSchema = z.object({
  idMeal: z.string(),
  strMeal: z.string(),
  strCategory: z.string(),
  strInstructions: z.string(),
  strMealThumb: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strIngredient7: z.string().nullable(),
  strIngredient8: z.string().nullable(),
  strIngredient9: z.string().nullable(),
  strIngredient10: z.string().nullable(),
  strIngredient11: z.string().nullable(),
  strIngredient12: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
  strMeasure7: z.string().nullable(),
  strMeasure8: z.string().nullable(),
  strMeasure9: z.string().nullable(),
  strMeasure10: z.string().nullable(),
  strMeasure11: z.string().nullable(),
  strMeasure12: z.string().nullable(),
});
