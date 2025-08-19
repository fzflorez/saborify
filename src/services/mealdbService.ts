import axios from "axios";
import {
  CategoriesResponseSchema,
  MealsResponseSchema,
  RecipeResponseSchema,
} from "../schema/recipes-schema";
import { MealsByCategoryResponse } from "../types";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getAllCategories = async () => {
  const url = `${BASE_URL}/categories.php`;
  const { data } = await axios(url);
  const result = CategoriesResponseSchema.safeParse(data.categories);
  if (result.success) {
    return result.data;
  }
  return [];
};

export const getMealsByCategory = async (
  categoryName: string
): Promise<MealsByCategoryResponse> => {
  try {
    if (!categoryName) return [];
    const url = `${BASE_URL}/filter.php?c=${categoryName}`;
    const { data } = await axios.get(url);
    const result = MealsResponseSchema.safeParse(data.meals);
    if (result.success) {
      return result.data;
    }
    return new Error("Error fetching meals by category.");
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getMealById = async (idMeal: string) => {
  const url = `${BASE_URL}/lookup.php?i=${idMeal}`;
  const { data } = await axios(url);
  const result = RecipeResponseSchema.safeParse(data.meals[0]);
  if (result.success) {
    return result.data;
  }
};

export const getMealsBySearch = async (searchTerm: string) => {
  try {
    const url = `${BASE_URL}/search.php?s=${searchTerm}`;
    const { data } = await axios(url);
    console.log(data);
    const result = MealsResponseSchema.safeParse(data.meals || []);
    if (result.success) {
      return result.data;
    }
    return [];
  } catch (error) {
    return [];
  }
};
