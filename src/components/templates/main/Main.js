import React from "react";
import TopNav from "../../molecules/top_nav/TopNav";
import SideNav from "../../molecules/side_nav/SideNav";
import "./Style.css";
import { Routes, Route, Link } from "react-router-dom";
import HomeSection from "../../organisms/home_section/HomeSection";
import UploadVideo from "../../organisms/upload_video_section/UploadVideoSection";
import MyVideosSection from "../../organisms/my_videos_section/MyVideosSection";

const Main = () => {
  return (
    <div className="home-template-container">
      <div className="top-nav-section">
        <TopNav />
      </div>
      <div className="flex-box-section">
        <div className="side-nav-col">
          <SideNav />
        </div>
        <div className="flex-section-col">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/upload" element={<UploadVideo />} />
            <Route path="/myVideos" element={<MyVideosSection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Main;
