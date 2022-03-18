import React, { useState, useEffect, useContext } from "react";
import "./Style.css";
import SideNavIcon from "../../atoms/side_nav_icon/SideNavIcon";
import { MdRouter, MdUpload } from "react-icons/md";
import FormField from "../../atoms/form_field/FormField";
import { VideoContext } from "../../../contexts/VideoContext";
import { useNavigate } from "react-router-dom";

const UploadFrom = () => {
  const { addVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  const tagList = [
    "movie",
    "gaming",
    "music",
    "programming",
    "education",
    "animation",
    "photography",
    "travelling",
    "scenery",
  ];

  const [selected, setSelected] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState();

  const addToSelected = (keyword) => {
    if (selected.length < 5) {
      setSelected((oldarray) => {
        return [...oldarray, keyword];
      });
    }
  };

  const removeFromSelected = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    }
  };

  useEffect(() => {
    setSelected(selected);
    setTitle(title);
  }, [selected, title]);

  const uploadVideo = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    const newVideo = {
      thumbnail: thumbnail,
      video: video,
      title: title,
      tags: selected,
      uploadedBy: "saim",
      timeStamp: currentDate,
    };
    addVideo(newVideo);
    navigate("/");
  };

  return (
    <div className="upload-form">
      <SideNavIcon Icon={MdUpload} Title="Upload Your Video!" />
      <FormField
        Type="text"
        Placeholder="Title"
        handlerFunction={setTitle}
        Title={title}
      />
      <p>Upload Thumbnail</p>
      <FormField Type="file" handlerFunction={setThumbnail} />
      <p>Upload Video</p>
      <FormField Type="file" handlerFunction={setVideo} />
      <p>Select Tags (5)</p>
      <div className="upload-tag-container">
        {tagList.map((keyword) => {
          if (selected.includes(keyword)) {
            return (
              <div
                className="tag tag-selected"
                onClick={() => removeFromSelected(keyword)}
              >
                {keyword}
              </div>
            );
          } else {
            return (
              <div className="tag" onClick={() => addToSelected(keyword)}>
                {keyword}
              </div>
            );
          }
        })}
      </div>
      <hr></hr>
      <div className="form-button-container">
        <button type="submit" onClick={(e) => uploadVideo(e)}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadFrom;
