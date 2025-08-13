import HomeClient from "@/src/components/home-client";
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
      
      <div className="flex w-full max-w-lg rounded-full overflow-hidden shadow-lg mt-2">
        <input
          type="text"
          placeholder="Buscar por nombre de receta..."
          className="w-full px-5 py-3 bg-white focus:outline-none text-gray-700"
        />
        <button
          type="button"
          className="px-5 py-3 bg-yellow-800 text-white font-semibold hover:bg-yellow-900 transition duration-300 ease-in-out"
        >
          Buscar
        </button>
      </div>

      <HomeClient categories={categories} />
    </div>
  );
}
