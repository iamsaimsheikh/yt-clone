import React from "react";
import "./Style.css";
import VideoImage from "../../atoms/video_image/VideoImage";
import VideoTitle from "../../atoms/video_title/VideoTitle";
import VideoTimeStamp from "../../atoms/video_timestamp/VideoTimeStamp";

const VideoCard = ({ video }) => {
  console.log(video.title);
  return (
    <div className="video-card">
      <div className="video-card-image">
        <VideoImage image={video.thumbnail} />
      </div>
      <div className="video-card-title">
        <VideoTitle title={video.title} />
      </div>
      <div className="video-card-time">
        <p>
          <VideoTimeStamp timeStamp={video.timeStamp} />
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
