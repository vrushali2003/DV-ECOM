import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import dvlogo from "../assest/dvlogo.svg";
import favourite from "../assest/favourite.png";
import cartbutton from "../assest/cartbutton.png";
import crossimg from "../assest/crossimg.svg"
import "../css/navbar.scss";
import notification from "../assest/notification.svg";
import person_profile from "../assest/person_profile.svg";
import Notification from "../views/Notification";
//import { useAuth0 } from "@auth0/auth0-react";
import CartPopupPage from "../views/CartPopupPage"; 
import ProfilePopup from "../views/ProfilePopup";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showAboutTab, setShowAboutTab] = useState(true);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showMyLearningTab, setShowMyLearningTab] = useState(false);
  const [showCoursesPage, setShowCoursesPage] = useState(true);
  const [showFavouriteIcon, setShowFavouriteIcon] = useState(false);
  const [showCartIcon, setShowCartIcon] = useState(true);
  const [showNotificationIcon, setShowNotificationIcon] = useState(false);
  const [showPersonProfileIcon, setShowPersonProfileIcon] = useState(false);
  // const [isTeachWithUsActive, setIsTeachWithUsActive] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showJoinButton, setShowJoinButton] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  //const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfilePopupHovered, setIsProfilePopupHovered] = useState(false);
  const [isNotificationHovered, setIsNotificationHovered] = useState(false);

  const location = useLocation();

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem("loggedInUser");
    const userIsLoggedIn = !!loggedInUser;

    
    setIsLoggedIn(userIsLoggedIn);
    setShowPersonProfileIcon(userIsLoggedIn);
  }, [location.pathname]); // The empty dependency array ensures that this effect runs once after the initial render

  const handleNotificationIconHover = () => {
    setShowNotifications(true);
    setIsNotificationHovered(true);
  };

  const handleNotificationIconLeave = () => {
    setIsNotificationHovered(false);
    setShowNotifications(false);
  };

  const handleProfilePopupHover = () => {
    setShowProfilePopup(true);
    setIsProfilePopupHovered(true);
  };

  const handleProfilePopupLeave = () => {
    setIsProfilePopupHovered(false);
    setShowProfilePopup(false);
  };

  const handleCartClick = () => {
    setShowCartPopup(!showCartPopup);
  };
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const handleCoursesClick = () => {
    setShowAboutTab(false);
    setShowLoginButton(false);
    setShowMyLearningTab(true);
    setShowSearchBar(false);
    setShowFavouriteIcon(true);
    setShowCartIcon(true);
    setShowNotificationIcon(true);
    setShowPersonProfileIcon(true);
    setShowJoinButton(false);
    setShowCoursesPage(true);
    if (window.innerWidth <= 576) {
      setIsNavCollapsed(true); // Close the navbar in mobile view
    }
  };
  const handleMyLearningClick = () => {
    setShowAboutTab(false);
    setShowLoginButton(false);
    setShowMyLearningTab(true);
    setShowFavouriteIcon(true);
    setShowCartIcon(true);
    setShowNotificationIcon();
    setShowPersonProfileIcon(true);
    setShowSearchBar(false);
    setShowJoinButton(false);
    if (window.innerWidth <= 576) {
      setIsNavCollapsed(true); // Close the navbar in mobile view
    }
  };

  const handleHomeClick = () => {
    setShowAboutTab(true);
    setShowMyLearningTab(false);
    setShowLoginButton(true);
    setShowFavouriteIcon(false);
    setShowCartIcon(true);
    setShowNotificationIcon(false);
    // setShowPersonProfileIcon(false);
    // setShowPersonProfileIcon(isLoggedIn); // Show the profile icon if the user is logged in
    setShowSearchBar(false);
    setShowJoinButton(false);
    if (window.innerWidth <= 576) {
      setIsNavCollapsed(true); // Close the navbar in mobile view
    }
  };

  const handleAboutClick = () => {
    setShowAboutTab(true);
    setShowMyLearningTab(false);
    setShowLoginButton(false);
    setShowFavouriteIcon(true);
    setShowCartIcon(true);
    setShowNotificationIcon(false);
    setShowPersonProfileIcon(false);
    setShowSearchBar(false);
    setShowJoinButton(false);
    if (window.innerWidth <= 576) {
      setIsNavCollapsed(true); // Close the navbar in mobile view
    }
  };

  const handleTeachWithUsClick = () => {
    setShowAboutTab(true);
    setShowMyLearningTab(false);
    setShowLoginButton(false);
    setShowFavouriteIcon(false);
    setShowCartIcon(false);
    setShowNotificationIcon(false);
    setShowPersonProfileIcon(false);
    setShowSearchBar(false);
    setShowJoinButton(true);
    if (window.innerWidth <= 576) {
      setIsNavCollapsed(true); // Close the navbar in mobile view
    }
  };

  const handleContactClick = () => {
    setShowAboutTab(false);
    setShowMyLearningTab(true);
    setShowLoginButton(false);
    setShowFavouriteIcon(true);
    setShowCartIcon(true);
    setShowNotificationIcon(true);
    setShowPersonProfileIcon(true);
    setShowSearchBar(false);
    setShowJoinButton(false);
    if (window.innerWidth <= 576) {
      setIsNavCollapsed(true); // Close the navbar in mobile view
    }
  };

  // Add a function to handle the login/logout
  // const handleLoginClick = () => {
  //   if (isAuthenticated) {
  //     // If the user is authenticated, log them out
  //     logout({ returnTo: window.location.origin });
  //   } else {
  //     // If the user is not authenticated, toggle the login state or perform login logic
  //     setIsLoggedIn(!isLoggedIn);
  //     // Add additional login logic here if needed
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0  Nav-container ">
      <div className="container-fluid">
        <Link to="/" className="navbar-logo">
          <img src={dvlogo} alt="Logo" width="150" height="50" />
        </Link>

        <button
          className={`navbar-toggler ${isNavCollapsed ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          onClick={handleNavCollapse}
          aria-label="Toggle navigation"
        >
           
           {isNavCollapsed ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <img src={crossimg} alt="crossimg" width="24" height="24" />
          )}
          {/* {/ <span className="navbar-toggler-icon"></span> /} */}
        </button>

        <div
          className={`collapse navbar-collapse  justify-content-end navbar-collapse  ${
            isNavCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/Home" className="nav-link" onClick={handleHomeClick}>
                HOME
              </Link>
            </li>
            {showAboutTab && (
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link"
                  onClick={handleAboutClick}
                >
                  ABOUT
                </Link>
              </li>
            )}
            {showMyLearningTab && (
              <li className="nav-item">
                <Link
                  to="/MyLearningPage"
                  className="nav-link"
                  onClick={handleMyLearningClick}
                >
                  MY LEARNING
                </Link>
              </li>
            )}
            {showCoursesPage && (
              <li className="nav-item">
                <Link
                  to="/CoursesPages"
                  className="nav-link"
                  onClick={handleCoursesClick}
                >
                  COURSES
                </Link>
              </li>
            )}

            <li className={`nav-item teach-with-us-active`}>
              <Link
                to="/Teach"
                className="nav-link"
                onClick={handleTeachWithUsClick}
              >
                TEACH WITH US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUsPages"
                className="nav-link"
                onClick={handleContactClick}
              >
                CONTACT US
              </Link>
            </li>

            {showFavouriteIcon && (
              <li className="nav-item">
                <Link to="/LikeMainPage" className="nav-link">
                  <img
                    className="favourite-icon"
                    src={favourite}
                    alt="favourite"
                  />
                </Link>
              </li>
            )}

            {showNotificationIcon && (
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onMouseEnter={handleNotificationIconHover}
                  onMouseLeave={handleNotificationIconLeave}
                >
                  <img
                    className="notification-icon icon-spacing"
                    src={notification}
                    alt="notification"
                  />
                  {showNotifications && (
                    <Notification onClose={() => setShowNotifications(false)} />
                  )}
                </Link>
              </li>
            )}

            {showPersonProfileIcon && (
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onMouseEnter={handleProfilePopupHover}
                  onMouseLeave={handleProfilePopupLeave}
                >
                  <img
                    className="person_profile-icon icon-spacing"
                    src={person_profile}
                    alt="person_profile"
                  />
                </Link>
              </li>
            )}

            {showCartIcon && (
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleCartClick}>
                  <img
                    className="cart-icon icon-spacing"
                    src={cartbutton}
                    alt="cart"
                  />
                </Link>
              </li>
            )}
            {showLoginButton && !localStorage.getItem("loggedInUser") && (
              <li className="nav-item">
                <div className="btn-login-nav">
                  <Link to="/SignUp" className="btn btn-primary">
                    LOGIN/SIGNUP
                  </Link>
                </div>
              </li>
            )}

            {showJoinButton && (
              <li className="nav-item">
                <div className="btn-login-nav">
                  <Link to="/Applicationform" className="btn btn-primary">
                    JOIN WITH US
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {showProfilePopup && (
        <ProfilePopup
          isOpen={showProfilePopup}
          onHover={handleProfilePopupHover}
          onLeave={handleProfilePopupLeave}
          trigger="hover"
        />
      )}
      {showCartPopup && (
        <CartPopupPage
          isOpen={showCartPopup}
          toggleCartPopup={handleCartClick}
        />
      )}
    </nav>
  );
}

export default Navbar;