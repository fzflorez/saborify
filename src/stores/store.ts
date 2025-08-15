import { create } from "zustand";
import { MealByCategory, MealsByCategory, Recipe } from "../types";
import { getMealById, getMealsByCategory } from "../services/mealdbService";
import { get } from "http";

type Store = {
  mealsByCategory: MealsByCategory;
  modal: boolean;
  selectRecipe: Recipe;
  fetchMealsByCategory: (categoryName: string) => Promise<void>;
  fetchMealById: (id: string) => Promise<void>
  closeModal: () => void;
  fetchMealByCategoryError: boolean;
  fetchMealByCategoryLoading: boolean;
};

export const useStore = create<Store>((set) => ({
  mealsByCategory: [],
  modal: false,
  selectRecipe: {} as Recipe,
  fetchMealByCategoryError: false,
  fetchMealByCategoryLoading: false,
  fetchMealsByCategory: async (categoryName: string) => {
    set(() => ({
      fetchMealByCategoryLoading: true,
      fetchMealByCategoryError: false,
    }));
    try {
      const mealsByCategory = await getMealsByCategory(categoryName);
      if (mealsByCategory instanceof Error) {
        set(() => ({
          fetchMealByCategoryLoading: false,
          fetchMealByCategoryError: true,
          mealsByCategory: [],
        }));
        return;
      }
      set(() => ({
        fetchMealByCategoryLoading: false,
        fetchMealByCategoryError: false,
        mealsByCategory,
      }));
    } catch (error) {
      set(() => ({
        fetchMealByCategoryLoading: false,
        fetchMealByCategoryError: true,
      }));
    }
  },
  fetchMealById: async (id: string) => {
    const selectRecipe = await getMealById(id)
    set({
      selectRecipe,
      modal: true,
      fetchMealByCategoryLoading: false,
      fetchMealByCategoryError: false,
    })
  }, 
  closeModal: () => {
    set({
      modal: false,
      selectRecipe: {} as Recipe,
      fetchMealByCategoryLoading: false,
      fetchMealByCategoryError: false,
    })
  },
}));
