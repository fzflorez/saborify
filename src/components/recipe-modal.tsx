"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useStore } from "../stores/store";
import Image from "next/image";
import { Fragment, ReactElement } from "react";
import { Recipe } from "../types";

export default function RecipeModal() {
  const selectRecipe = useStore((state) => state.selectRecipe);
  const modal = useStore((state) => state.modal);
  const closeModal = useStore((state) => state.closeModal);

  const rederIngredients = () => {
    const ingredients: ReactElement[] = [];

    for (let i = 1; i <= 12; i++) {
      const ingredient = selectRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectRecipe[`strMeasure${i}` as keyof Recipe];
      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="sm:text-lg">
            {ingredient} - {measure}
          </li>
        );
      }
    }

    return ingredients;
  };

  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full w-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative h-full overflow-y-scroll scrollbar-custom transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition sm:w-full sm:max-w-3xl">
                <Dialog.Title
                  as="h3"
                  className="text-gray-800 text-2xl sm:text-3xl font-bold truncate"
                >
                  {selectRecipe.strMeal}
                </Dialog.Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 sm:h-96">
                  <div className="w-full h-full">
                    {selectRecipe?.strMealThumb && selectRecipe?.strMeal && (
                      <Image
                        src={selectRecipe.strMealThumb}
                        alt={selectRecipe.strMeal}
                        className="rounded-lg w-full h-full object-cover"
                        width={500}
                        height={300}
                      />
                    )}
                  </div>

                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-gray-800 text-xl sm:text-2xl font-bold mb-2"
                    >
                      Ingredients
                    </Dialog.Title>

                    {rederIngredients()}
                  </div>
                </div>
                <div className="mt-6">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-800 text-xl sm:text-2xl font-bold mb-2"
                  >
                    Instructions
                  </Dialog.Title>
                  <div>
                    <p className="text-gray-800 sm:text-lg">
                      {selectRecipe.strInstructions}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-yellow-800 transition duration-300 ease-in-out hover:scale-[1.03] text-white font-semibold text-sm sm:text-base py-2 px-5 rounded-lg mt-6"
                  onClick={() => closeModal()}
                >
                  Close
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
