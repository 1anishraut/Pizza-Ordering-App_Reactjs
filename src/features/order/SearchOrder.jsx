import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./search-line.png";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
    setShowInput(false);
  }

  function toggleInput() {
    setShowInput((prev) => !prev);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 rounded-full bg-yellow-100 px-2 "
    >
      {/* Input: Always visible on sm+ screens, toggle on small */}
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`bg-transparent px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 
          ${showInput ? "w-[140px]" : "w-0"} 
          overflow-hidden sm:block sm:w-72 ${!showInput ? "hidden" : ""}`}
      />

      {/* Search Icon */}
      <button type="button" onClick={toggleInput} className="sm:hidden">
        <img src={SearchIcon} alt="Search" className="h-10 py-2" />
      </button>

      {/* Search Icon (static on sm+ screens) */}
      <button type="submit" className="hidden sm:block">
        <img src={SearchIcon} alt="Search" className="h-6 " />
      </button>
    </form>
  );
}

export default SearchOrder;
