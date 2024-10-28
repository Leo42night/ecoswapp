// import React from "react";

// landingPage, Catalog
const SearchBar = () => {
  return (
    <div className="shadow-md focus-within:ring ring-offset-0 sm:ring-offset-2 focus-within:ring-zinc-800 outline-1 flex gap-2 p-1 sm:p-2 rounded-md bg-neutral-200">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?apiKey=937261aeaab2482b817691a974988cbc&"
        alt=""
        className="shrink-0 w-7 aspect-square"
      />
      <input
        className="border-transparent focus:border-transparent focus:ring-0 my-auto grow bg-transparent focus:outline-none focus:outline-transparent outline-0"
        placeholder="Mencoba mencari sesuatu?"
      />
    </div>
  );
};

export default SearchBar;
