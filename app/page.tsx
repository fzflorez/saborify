import HomeClient from "@/src/components/home-client";
import IntroSection from "@/src/components/intro-section";
import RecipeModal from "@/src/components/recipe-modal";
import SearchBar from "@/src/components/search-bar";
import { getAllCategories } from "@/src/services/mealdbService";

export default async function Home() {
  const categories = await getAllCategories();

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 text-center my-8 px-4">
      <IntroSection />
      <SearchBar />
      <HomeClient categories={categories} />
      <RecipeModal />
    </div>
  );
}
