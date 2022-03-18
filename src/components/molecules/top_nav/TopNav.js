import React, { useContext } from "react";
import SearchBar from "../../atoms/search_bar/SearchBar";
import "./Style.css";
import YoutubeLogo from "./assets/youtube-logo.png";
import ProfileImage from "../../atoms/profile_image/ProfileImage";
import SideNavIcon from "../../atoms/side_nav_icon/SideNavIcon";
import { MdOutlineNotifications } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdOutlineApps } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { NavigationContext } from "../../../contexts/NavigationContext";

const TopNav = () => {
  const { open, setOpen } = useContext(NavigationContext);

  return (
    <div className="top-nav">
      <div onClick={() => setOpen(!open)}>
        <SideNavIcon Icon={MdMenu} />
      </div>
      <div className="logo-container">
        <img className="logo" src={YoutubeLogo} />
      </div>
      <SearchBar />
      <div className="top-nav-right-icons">
        <SideNavIcon Icon={MdOutlineVideoCall} />
        <SideNavIcon Icon={MdOutlineApps} />
        <SideNavIcon Icon={MdOutlineNotifications} />
        <ProfileImage />
      </div>
    </div>
  );
};

export default TopNav;
