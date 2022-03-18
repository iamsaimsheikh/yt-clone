import React from "react";
import "./Style.css";

const FormField = ({ Type, Placeholder, handlerFunction, Title }) => {
  return (
    <div className="form-field">
      {Type === "text" ? (
        <input
          type="text"
          placeholder={Placeholder}
          value={Title}
          onChange={(e) => {
            handlerFunction(e.target.value);
          }}
        />
      ) : (
        <input
          className="file-input-field"
          type="file"
          onChange={(event) =>
            handlerFunction(URL.createObjectURL(event.target.files[0]))
          }
        />
      )}
    </div>
  );
};

export default FormField;
