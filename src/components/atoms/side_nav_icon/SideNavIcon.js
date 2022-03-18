import React, { useContext } from "react";
import { NavigationContext } from "../../../contexts/NavigationContext";
import "./Style.css";

const SideNavIcon = ({ Icon, Title }) => {
  const { setScreen } = useContext(NavigationContext);

  return (
    <div onClick={() => setScreen(Title)} className="side-nav-icon-container">
      <Icon className="side-nav-icon" />
      <span>{Title}</span>
    </div>
  );
};

export default SideNavIcon;
