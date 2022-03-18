import React, { useContext } from "react";
import { NavigationContext } from "../../../contexts/NavigationContext";
import "./Style.css";
import SideNavIcon from "../../atoms/side_nav_icon/SideNavIcon";
import { Routes, Route, Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdOutlineUpload } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { MdOutlinePlayArrow } from "react-icons/md";

const SideNav = () => {
  const { screen, open } = useContext(NavigationContext);

  return (
    <div className={open === true ? "side-nav-active" : "side-nav"}>
      {screen === "Home" ? (
        <SideNavIcon Icon={MdHome} Title="Home" />
      ) : (
        <Link to="/">
          <SideNavIcon Icon={MdOutlineHome} Title="Home" />
        </Link>
      )}

      {screen === "Upload" ? (
        <SideNavIcon Icon={MdUpload} Title="Upload" />
      ) : (
        <Link to="upload">
          <SideNavIcon Icon={MdOutlineUpload} Title="Upload" />
        </Link>
      )}

      {screen === "My Videos" ? (
        <SideNavIcon Icon={MdPlayArrow} Title="My Videos" />
      ) : (
        <Link to="myVideos">
          <SideNavIcon Icon={MdOutlinePlayArrow} Title="My Videos" />
        </Link>
      )}
    </div>
  );
};

export default SideNav;
