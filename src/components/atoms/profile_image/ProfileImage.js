import React from "react";
import ProfilePicture from "./assets/profile-picture.jpeg";
import "./Style.css";

const ProfileImage = () => {
  return (
    <div className="profile-picture-container">
      <img className="profile-picture" src={ProfilePicture} />
    </div>
  );
};

export default ProfileImage;
