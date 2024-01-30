import React, { useState, useRef } from "react";
import studentlogo from "../assest/studentlogo.svg";
import "../css/coursesdetails.scss";
import lessons from "../assest/lessons.jpg";
import bar from "../assest/bar.svg";
import coursemodule from "../assest/coursemodule.png";
import { useParams, useNavigate } from "react-router-dom";
import level from "../assest/level.svg";
import playicon from "../assest/playicon.svg";
import share from "../assest/share.svg";
import duration from "../assest/duration.svg";
import all_coursesData from "../json/all_courses.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const CoursesDetails = () => {

  const { id } = useParams();

  const courseData = all_coursesData.all_courses.find(
    (course) => course.id === id
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };
  const handleShare = async () => {
    try {
      await navigator.share({
        title: courseData.title,
        text: `Check out this course: ${courseData.title}`,
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    videoRef.current.pause();
  };
  console.log(courseData);

  return (
    <div className="container  dv-courses-details">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
          <div className="card d-flex h-100">
            <div className="image-container-main" onClick={handleShowModal}>
              <div className="image-wrapper">
                <img
                  src={require(`../assest/${courseData.imageKey}`)}
                  className="w-100 image-hover"
                  alt={courseData.title}
                />
                <button className="image-button">
                  <img src={duration} className="clock" alt="watch" />
                  {courseData.duration}
                </button>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <div className="d-flex">
                  <img src={lessons} className="icon" />
                  <p className="para">{courseData.lesson}</p>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <div className="d-flex">
                  <img src={studentlogo} className="icon " />
                  <p className="para">{courseData.users}</p>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <div className="d-flex">
                  <img src={bar} className="icon " />
                  <p className="para">{courseData.level}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="pb-3">
                  <h6>
                    <b>{courseData.title}</b>
                  </h6>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 right-border ">
                <div className="division">
                  <h6>Instructor: </h6>
                  <h6>
                    <b> {courseData.instructor}</b>
                  </h6>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-6 col-lg-6  ">
                <div className="division">
                  <h6>Category :</h6>
                  <h6>
                    <b>{courseData.category}</b>
                  </h6>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 right-border border-top pt-3">
                <div className="division">
                  <h6>Duration :</h6>
                  <h6>
                    <b>{courseData.duration}</b>
                  </h6>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 border-top pt-3">
                <div className="division">
                  <h6>Reviews :</h6>
                  <img
                    src={require(`../assest/${courseData.ratings}`)}
                    className="reviews  image-hover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="paragraph">
                After successfully completion of course, Quizes, Practical
                Performance you will receive a Certificate of Completion. Which
                will be the proof of that you have completed the courses
                successfully and you know the fundamentals of the courses.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
          <div className="card d-flex h-100 ">
            <div className="video-container" onClick={handleShowModal}>
              <div
                className="Video-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`play-icon-container ${
                    isHovered ? "hidden" : "visible"
                  }`}
                >
                  <img src={playicon} className="playicon" alt="Play Icon" />
                </div>
                <video ref={videoRef} width="100%" controls muted={!isHovered}>
                  <source
                    src={require(`../vedio/${courseData.video}`)}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="row">
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <h5 className="h5 my-2">{courseData.price} </h5>
              </div>

              <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                <div className="button-style d-flex justify-content-end">
                  <Link to="/CheckInLogin">
                    <button className="btn btn-2">BUY NOW</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="button-style">
                <Link to="/LikeMainPage">
                  <button className="btn btn-1" >
                    ADD TO CART
                  </button>
                </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-h3">
                <b> Course Informatio</b>n
              </h3>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={studentlogo} className="vedio" />
              </div>
              <div>
                <p>
                  <b>Instructor :</b>
                </p>
              </div>
              <div>
                <h6 className="h6">{courseData.instructor}</h6>
              </div>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={lessons} className="vedio" />
              </div>
              <div>
                <p>
                  <b> Lessons :</b>
                </p>
              </div>
              <div>
                <h6 className="h6">{courseData.totalLessons}</h6>
              </div>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={duration} className="vedio" />
              </div>
              <div>
                <p>
                  <b> Duration :</b>
                </p>
              </div>

              <div>
                <h6 className="h6">{courseData.courseDuration}</h6>
              </div>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={level} className="vedio" />
              </div>
              <div>
                <p>
                  <b> Level :</b>
                </p>
              </div>
              <div>
                <h6 className="h6">{courseData.level}</h6>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <img src={courseData.globe} className="vedio" />
              </div>
              <div>
                <p>
                  <b> Language </b>
                </p>
              </div>
              <div>
                <h6 className="h6">{courseData.language}</h6>
              </div>
            </div>
            <div className="button-style">
              <button className="btn btn-2" onClick={handleShare}>
                <div className="button-content">
                  <img src={share} className="share" alt="Share Icon" />
                  SHARE THIS COURSE
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container dv-accord">
        <div className="card ">
          <h2 className="h2">COURSES MODULES</h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-style">
              <div className="accordion" id="accordionExample">
                {courseData.accordionData && courseData.accordionData.length > 0
                  ? courseData.accordionData.map((section, index) => (
                      <div
                        className="accordion-item mt-4 rounded-3"
                        key={index}
                      >
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button rounded-3 text-orange ${
                              index === activeIndex ? "active" : ""
                            }`}
                            type="button"
                            onClick={() => handleToggle(index)}
                            aria-expanded={
                              index === activeIndex ? "true" : "false"
                            }
                            aria-controls={`collapse${index}`}
                          >
                            {section.header}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${
                            index === activeIndex ? "show" : ""
                          }`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body text-left">
                            {section.body &&
                              section.body.map((body, contentIndex) => (
                                <div key={contentIndex}>{body}</div>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className=" col-12 col-sm-12 col-md-5 col-lg-5 mt-4 ">
              <div>
                <img src={coursemodule} className="w-100 " alt="coursemodule" />

                <div className="row">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="division">
                      <h6 className="h6-1">Reviews:</h6>
                      <img
                        src={require(`../assest/${courseData.ratings}`)}
                        className="reviews image-hover"
                      />
                    </div>
                  </div>

                  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="division">
                      <h6 className="h6-1">Duration:</h6>
                      <p className="para-1">40 hrs</p>
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="division">
                      <h6 className="h6-1">Instructor:</h6>
                      <p className="para-1">Vineet & Khijendra</p>
                    </div>
                  </div>
                </div>

                <div className="para">
                  <p>
                    Discover the SQL Course that students absolutely adore! Join
                    us on a journey where learning SQL becomes an enjoyable and
                    rewarding experience, catering to your passion for data and
                    database management.
                  </p>
                </div>

                <button className="btn btn-2" onClick={handleShare}>
                  <div className="button-content">
                    <img src={share} className="share" alt="Share Icon" />
                    SHARE THIS COURSE
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CoursesDetails;