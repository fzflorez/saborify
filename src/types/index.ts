import z from "zod";
import {
  CategoriesResponseSchema,
  CategoryResponseSchema,
  MealResponseSchema,
  MealsResponseSchema,
  RecipeResponseSchema,
} from "../schema/recipes-schema";

export type Category = z.infer<typeof CategoryResponseSchema>;
export type Categories = z.infer<typeof CategoriesResponseSchema>;
export type MealByCategory = z.infer<typeof MealResponseSchema>;
export type MealsByCategory = z.infer<typeof MealsResponseSchema>;
export type Recipe = z.infer<typeof RecipeResponseSchema>;