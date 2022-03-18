import { createContext, useState } from "react";
import React from "react";

export const SearchContext = createContext();

function SearchContextProvider(props) {
  const [searchText, setSearchText] = useState("");
  const [searchTag, setSearchTag] = useState(null);

  return (
    <SearchContext.Provider
      value={{ searchText, setSearchText, searchTag, setSearchTag }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
