import { create } from "zustand";
import { MealsByCategory, Recipe } from "../types";
import {
  getMealById,
  getMealsByCategory,
  getMealsBySearch,
} from "../services/mealdbService";

type Store = {
  mealsByCategory: MealsByCategory;
  modal: boolean;
  selectRecipe: Recipe;
  mealsBySearch: MealsByCategory;
  fetchMealsByCategory: (categoryName: string) => Promise<void>;
  fetchMealById: (id: string) => Promise<void>;
  closeModal: () => void;
  fetchMealByCategoryError: boolean;
  fetchMealByCategoryLoading: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  fetchMealsBySearch: (search: string) => Promise<void>;
  fetchMealsBySearchLoading: boolean;
  fetchMealsBySearchError: boolean;
  clearSearchResults: () => void;
};

export const useStore = create<Store>((set) => ({
  mealsByCategory: [],
  modal: false,
  selectRecipe: {} as Recipe,
  mealsBySearch: [],
  fetchMealByCategoryError: false,
  fetchMealByCategoryLoading: false,
  fetchMealsBySearchLoading: false,
  fetchMealsBySearchError: false,
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
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
    const selectRecipe = await getMealById(id);
    set({
      selectRecipe,
      modal: true,
      fetchMealByCategoryLoading: false,
      fetchMealByCategoryError: false,
    });
  },

  closeModal: () => {
    set({
      modal: false,
      selectRecipe: {} as Recipe,
      fetchMealByCategoryLoading: false,
      fetchMealByCategoryError: false,
    });
  },

  fetchMealsBySearch: async (search: string) => {
    set({
      fetchMealsBySearchLoading: true,
      fetchMealsBySearchError: false,
    });
    try {
      const mealsBySearch = await getMealsBySearch(search);
      set({
        mealsBySearch,
        fetchMealsBySearchLoading: false,
        fetchMealsBySearchError: false,
      });
    } catch (error) {
      set({
        mealsBySearch: [],
        fetchMealsBySearchLoading: false,
        fetchMealsBySearchError: true,
      });
    }
  },

  clearSearchResults: () => set({ mealsBySearch: [], searchTerm: "" }),
}));
