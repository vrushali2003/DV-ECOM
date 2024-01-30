import React from "react";
import "../css/popuppage.scss"; 
function ResetEmail()
{
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2><b>Reset Email</b></h2>
        <div>
        <input
          
             
              type="text"
              placeholder="Enter your email"
              
              required
              
            />
        </div>
        <div className="btn">
          <button>Send Email</button>
          
        </div>
      </div>
    </div>
  );
}

export default ResetEmail;
