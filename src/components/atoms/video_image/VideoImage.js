import React from "react";
import "./Style.css";
import Thumbnail from "../../../contexts/dummy/car.jpg";

const VideoImage = ({ image }) => {
  return (
    <div className="video-thumbnail-container">
      <img className="video-thumbnail" src={image} />
    </div>
  );
};

export default VideoImage;
