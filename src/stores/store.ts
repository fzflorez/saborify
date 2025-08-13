import { create } from "zustand";
import { MealsByCategory } from "../types";
import { getMealsByCategory } from "../services/mealdbService";

type Store = {
  mealsByCategory: MealsByCategory;
  fetchMealsByCategory: (categoryName: string) => Promise<void>;
  fetchMealByCategoryError: boolean;
  fetchMealByCategoryLoading: boolean;
};

export const useStore = create<Store>((set) => ({
  mealsByCategory: [],
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
}));
