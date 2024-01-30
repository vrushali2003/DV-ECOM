

import React, { useState } from "react";
import "../css/applicationform.scss";
import mailteach from "../assest/mailteach.png";
import nameteach from "../assest/nameteach.png";
import phone from "../assest/phone.png";
import addressteach from "../assest/addressteach.png";
import PopupPage from "./PopupPage";
import uploadproff from "../assest/uploadproff.png";
import uploadcontent from "../assest/uploadcontent.png";
import experience from "../assest/experience.png";
import skills from "../assest/skills.png";

function Applicationform() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("EXIT");
  const [inputPlaceholder, setInputPlaceholder] = useState("FULL NAME");

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleYes = () => {
    closePopup();
  };

  const handleNo = () => {
    closePopup();
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (buttonLabel === "EXIT") {
      setButtonLabel("BACK");
      setInputPlaceholder("EXPERIENCE");
    } else {
      setButtonLabel("EXIT");
      setInputPlaceholder("FULL NAME");
    }
  }

  return (
    <div className="container dv-Application-form ">
    
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 white-column">
          
              <h1 className="heading-1">
                APPLY FOR TEACH
              </h1>
          
            <div className="para-1">
              <p>Be The Part Of Our Group</p>
            </div>

            <div className="form">
              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <div>
                        <img
                          className="icon"
                          src={nameteach}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="icon"
                          src={experience}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="Experience"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <>
                        <img
                          className="icon"
                          src={mailteach}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="E-Mail"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="icon"
                          src={skills}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="Skills"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <>
                        <img
                          className="icon"
                          src={phone}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Phone"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="icon"
                          src={uploadcontent}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="Upload Contact"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                  <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <>
                        <img
                          className="icon"
                          src={addressteach}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Address"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="icon"
                          src={uploadproff}
                          alt="addresslogo"
                         
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="Upload Id Proof"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="center-button">
                <button
                  onClick={handleNext}
                  className="my-button-next"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 blue-column">
         
                 <h1 className="heading">Hey Trainer!</h1>
               

               <div className="para">
                 <p>
                   Please complete the teacher 
                   application form to provide us 
                   with your essential information.
                 </p>
               </div>


                                <div className="center-button ">
                  <button onClick={showPopup} className="my-button ">
                    {buttonLabel === "EXIT" ? "EXIT" : "BACK"}
                  </button>
                </div>

                {isPopupVisible && <PopupPage onYes={handleYes} onNo={handleNo} />}
               </div>
            </div>

          </div>
     
     
  );
}

export default Applicationform;
