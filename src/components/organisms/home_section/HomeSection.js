import React, { useContext } from "react";
import "./Style.css";
import TagContainer from "../../molecules/tag_container/TagContainer";
import VideoCard from "../../molecules/video_card/VideoCard";
import { VideoContext } from "../../../contexts/VideoContext";
import { SearchContext } from "../../../contexts/SearchContext";

const HomeSection = () => {
  const { videoList } = useContext(VideoContext);
  const { searchText, searchTag, setSearchText } = useContext(SearchContext);

  console.log(videoList);

  return (
    <div className="home-section-container">
      <TagContainer />
      <div className="video-card-container">
        {videoList.map((video) => {
          if (searchText === "" || searchText.length < 3) {
            if (searchTag == null) {
              return <VideoCard video={video} />;
            } else {
              if (video.tags.includes(searchTag)) {
                return <VideoCard video={video} />;
              }
            }
          } else {
            if (
              video.title.toLowerCase().includes(searchText.toLowerCase()) &&
              searchText.length >= 3
            ) {
              if (searchTag == null) {
                return <VideoCard video={video} />;
              } else {
                if (video.tags.includes(searchTag)) {
                  return <VideoCard video={video} />;
                }
              }
            }
          }
        })}
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default HomeSection;
