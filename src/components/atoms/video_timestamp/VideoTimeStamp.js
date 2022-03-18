import React from "react";
import "./Style.css";

const VideoTimeStamp = ({ timeStamp }) => {
  return (
    <div className="video-timestamp">
      <b>Uploaded On: </b>
      {timeStamp}
    </div>
  );
};

export default VideoTimeStamp;
