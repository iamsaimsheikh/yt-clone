import { createContext, useState, useEffect } from "react";
import React from "react";
import Car from "./dummy/car.jpg";
import Stones from "./dummy/stones.jpg";
import Scene from "./dummy/scene.jpg";
import Lights from "./dummy/lights.jpg";

export const VideoContext = createContext();

function VideoContextProvider(props) {
  const [videoList, setVideoList] = useState([
    {
      thumbnail: Car,
      video: null,
      title: "Traveling With Friends",
      tags: ["travel", "vlog"],
      uploadedBy: "jasper",
      timeStamp: "22/7/12",
    },
    {
      thumbnail: Stones,
      video: null,
      title: "Acute Photography",
      tags: ["photography"],
      uploadedBy: "freddie",
      timeStamp: "22/7/12",
    },
    {
      thumbnail: Lights,
      video: null,
      title: "Acute Photography",
      tags: ["photography", "scenery"],
      uploadedBy: "dania",
      timeStamp: "22/7/12",
    },
    {
      thumbnail: Scene,
      video: null,
      title: "Acute Photography",
      tags: ["travel", "vlog"],
      uploadedBy: "saim",
      timeStamp: "22/7/12",
    },
  ]);

  const addVideo = (video) => {
    setVideoList([...videoList, video]);
  };

  useEffect(() => {
    setVideoList(videoList);
  }, videoList);

  return (
    <VideoContext.Provider value={{ videoList, addVideo }}>
      {props.children}
    </VideoContext.Provider>
  );
}

export default VideoContextProvider;
