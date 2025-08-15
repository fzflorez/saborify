import { memo } from "react";

type SearchBarProps = {
  // Puedes añadir props si necesitas manejar el estado de búsqueda
};

const SearchBar = memo(function SearchBar({}: SearchBarProps) {
  return (
    <div className="flex w-full max-w-lg rounded-full overflow-hidden shadow-lg mt-2">
      <input
        type="text"
        placeholder="Search by recipe name..."
        className="w-full px-5 py-3 bg-white focus:outline-none text-gray-700"
      />
      <button
        type="button"
        className="px-5 py-3 bg-yellow-800 text-white font-semibold hover:bg-yellow-900 transition duration-300 ease-in-out"
      >
        Search
      </button>
    </div>
  );
});

export default SearchBar;
