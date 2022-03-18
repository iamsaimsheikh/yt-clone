import React, { useContext } from "react";
import "./Style.css";
import { VideoContext } from "../../../contexts/VideoContext";
import VideoCard from "../../molecules/video_card/VideoCard";

const MyVideosSection = () => {
  const { videoList } = useContext(VideoContext);
  return (
    <div className="my-video-section-container">
      <div className="video-card-container">
        {videoList.map((video) => {
          if (video.uploadedBy === "saim") {
            return <VideoCard video={video} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default MyVideosSection;
