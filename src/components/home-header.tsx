import Link from "next/link";
import Card from "../ui/card";

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white/60 backdrop-blur-md">
      <Card className="py-5 px-10 rounded-b-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center justify-center container mx-auto space-y-4 sm:space-y-0">
          <Link 
            href="/"
            className="text-2xl font-bold text-red-400 sm:text-3xl"
          >
            Saborify
          </Link>
          <div>
            <form className="flex items-center">
              <input 
                type="text" 
                placeholder="Buscar una receta..."
                className="w-full max-w-xs px-4 py-1.5 sm:py-2 text-gray-700 text-sm sm:text-base border border-gray-300 rounded-l-full focus:outline-none"
              />
              <button className="bg-red-400 hover:bg-red-500 transition duration-300 ease-in-out text-white text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-r-full">
                Buscar
              </button>
            </form>
          </div>
        </div> 
      </Card>
    </header>
  )
}
