import React, { useContext } from "react";
import "./Style.css";
import { SearchContext } from "../../../contexts/SearchContext";

const SearchBar = () => {
  const { searchText, setSearchText } = useContext(SearchContext);

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
