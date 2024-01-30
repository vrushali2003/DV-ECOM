import React from "react";
import coursesdetailbanner from "../assest/coursesdetailbanner.webp";

function CoursesDetailsBanner() {
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    display: "block",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  };

  const headingStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    zIndex: 2,
  };

  return (
    <div className="w-100" style={{ overflow: "hidden" }}>
      <div className="row" style={containerStyle}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12" style={{ position: 'relative' }}>
          <img src={coursesdetailbanner} style={imgStyle} alt="image_courses" />
          <div style={overlayStyle}></div>
          <h1 style={headingStyle}><b>COURSES</b></h1>
        </div>
      </div>
    </div>
  );
}

export default CoursesDetailsBanner;
