import React from "react";
import Dropzone from "react-dropzone";

const FileUpload = ({ children }) => (
  // <Dropzone onDrop={() => console.log("file droped")}>
  //   {() => children}
  // </Dropzone>
  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
    {({ getRootProps, getInputProps }) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <label>You can send your CV</label>
          <button
            onClick={e => e.preventDefault()}
            style={{ border: "none", background: "none" }}
          >
            <i className="fas fa-plus-square fa-lg"></i>
          </button>
        </div>
      </section>
    )}
  </Dropzone>
);

export default FileUpload;
