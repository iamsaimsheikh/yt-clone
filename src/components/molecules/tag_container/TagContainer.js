import React from "react";
import { Tag } from "../../atoms/tag/Tag";
import "./Style.css";

const TagContainer = () => {
  return (
    <div className="tag-container">
      <Tag tag="music" />
      <Tag tag="gaming" />
      <Tag tag="news" />
      <Tag tag="travel" />
      <Tag tag="tech" />
    </div>
  );
};

export default TagContainer;
