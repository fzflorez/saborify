import HomeClient from "@/src/components/home-client";
import RecipeModal from "@/src/components/recipe-modal";
import SearchBar from "@/src/components/search-bar";
import { getAllCategories } from "@/src/services/mealdbService";

export default async function Home() {
  const categories = await getAllCategories();

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 text-center my-8">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl text-yellow-800 font-bold">
          Descubre recetas deliciosas
        </h1>
        <p className="text-gray-500 sm:text-lg">
          Explora nuestra colección de recetas de todo el mundo. ¡Busca o elige
          una categoría!
        </p>
      </div>
      <SearchBar />
      <HomeClient categories={categories} />
      <RecipeModal />
    </div>
  );
}
;


