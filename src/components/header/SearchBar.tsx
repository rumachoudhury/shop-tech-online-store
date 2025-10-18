import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        name="keyword"
        id="search-input"
        aria-label="search input"
        placeholder="What are you looking for?"
        className="w-full sm:w-64 md:w-100 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-gray"
      />
    </div>
  );
}

export default SearchBar;
