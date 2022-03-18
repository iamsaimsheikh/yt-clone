import React, { useContext } from "react";
import "./Style.css";
import { SearchContext } from "../../../contexts/SearchContext";

export const Tag = ({ tag, value }) => {
  const { searchTag, setSearchTag } = useContext(SearchContext);

  return (
    <div
      className={tag === searchTag ? "tag tag-active" : "tag"}
      value={tag}
      onClick={(e) => {
        setSearchTag(tag === searchTag ? null : tag);
      }}
    >
      {tag}
    </div>
  );
};
