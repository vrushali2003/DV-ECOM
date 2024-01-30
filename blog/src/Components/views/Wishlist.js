// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import tickmark from "../assest/tickmark.png";
// import wishlistshop from "../assest/wishlistshop.svg";
// import wishlist from "../json/wishlist.json";
// import "../css/wishlist.scss";
// import crossimg from "../assest/crossimg.png";

// const Wishlist = () => {
//   const wishlistinfo = wishlist;
//   console.log(wishlistinfo);

//   const [buttonClicked, setButtonClicked] = useState(
//     Array(wishlistinfo.length).fill(false)
//   );

//   const handleButtonClick = (index) => {
//     const updatedButtonClicked = [...buttonClicked];
//     updatedButtonClicked[index] = !updatedButtonClicked[index];
//     setButtonClicked(updatedButtonClicked);
//   };

//   return (
//     <div className="container dv-wishlist text-center">
//       <h1 className="dv-h1 ">WISHLIST</h1>

//       <div className="row first-row">
//         <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
//         <div className="col-2 col-sm-2 col-md-2 col-lg-2"></div>
//         <div className="col-5 col-sm-5 col-md-5 col-lg-5">
//           <h5><b>Course Name</b></h5>
//           </div>
//         <div className="col-2 col-sm-2 col-md-2 col-lg-2">
//           <h5><b>Unit Price</b></h5>
//           </div>
//         <div className="col-2 col-sm-2 col-md-2 col-lg-2"></div>
//       </div>

//       {wishlistinfo.wishlistdata.map((item, index) => (
//         <div key={item.id}>
//           <div className="row second-row text-center align-items-center">
//             <button className="cross col-1 col-sm-1 col-md-1 col-lg-1">
//               <img className="cross-img" src={crossimg} alt="cross" />
//             </button>
//             <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-style">
//               <img
//                 className="w-100"
//                 src={require(`../assest/${item.image}`)}
//                 alt={item.title}
//               />
//             </div>
//             <div className="col-5 col-sm-5 col-md-5 col-lg-5  col-style">
//               <h5 className="h5-style">{item.title}</h5>
//             </div>
//             <div className="col-2 col-sm-2 col-md-2 col-lg-2  col-style">
//               <h5 className="style-h5">{item.price}</h5>
//             </div>
//             <div className="col-2 col-sm-2 col-md-2 col-lg-2  ">
//               <div className="btn-style">
//                 {buttonClicked[index] ? (
//                   <Link to="/AfterAddingCart">
//                     <button className="btn">
//                       <img
//                         src={tickmark}
//                         alt="tickmark"
//                         className="wishlistshop"
//                       />
//                       <span>Go to cart</span>
//                     </button>
//                   </Link>
//                 ) : (
//                   <button
//                     className="btn"
//                     onClick={() => handleButtonClick(index)}
//                   >
//                     <img
//                       src={wishlistshop}
//                       alt="add-to-cart"
//                       className="wishlistshop"
//                     />
//                     <span>Add to cart</span>
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Wishlist;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import tickmark from "../assest/tickmark.png";
import wishlistshop from "../assest/wishlistshop.svg";
import wishlist from "../json/wishlist.json";
import "../css/wishlist.scss";
import crossimg from "../assest/crossimg.png";

const Wishlist = () => {
  const [wishlistInfo, setWishlistInfo] = useState(wishlist);
  const [buttonClicked, setButtonClicked] = useState(
    Array(wishlist.length).fill(false)
  );

  const handleButtonClick = (index) => {
    const updatedButtonClicked = [...buttonClicked];
    updatedButtonClicked[index] = !updatedButtonClicked[index];
    setButtonClicked(updatedButtonClicked);
  };

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlistInfo.wishlistdata.filter(
      (item) => item.id !== itemId
    );
    setWishlistInfo({ wishlistdata: updatedWishlist });
  };

  return (
    <div className="container dv-wishlist text-center">
      <h1 className="dv-h1 ">WISHLIST</h1>

      <div className="row first-row">
        <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2"></div>
        <div className="col-5 col-sm-5 col-md-5 col-lg-5">
          <h5><b>Course Name</b></h5>
          </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2">
          <h5><b>Unit Price</b></h5>
          </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2"></div>
      </div>

      {wishlistInfo.wishlistdata.map((item, index) => (
        <div key={item.id}>
          <div className="row second-row text-center align-items-center">
          <button
              className="cross col-1 col-sm-1 col-md-1 col-lg-1"
              onClick={() => removeFromWishlist(item.id)}
            >
              <img className="cross-img" src={crossimg} alt="cross" />
            </button>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-style">
              <img
                className="w-100"
                src={require(`../assest/${item.image}`)}
                alt={item.title}
              />
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-5  col-style">
              <h5 className="h5-style">{item.title}</h5>
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2  col-style">
              <h5 className="style-h5">{item.price}</h5>
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2  ">
              <div className="btn-style">
                {buttonClicked[index] ? (
                  <Link to="/AfterAddingCart">
                    <button className="btn">
                      <img
                        src={tickmark}
                        alt="tickmark"
                        className="wishlistshop"
                      />
                      <span>Go to cart</span>
                    </button>
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() => handleButtonClick(index)}
                  >
                    <img
                      src={wishlistshop}
                      alt="add-to-cart"
                      className="wishlistshop"
                    />
                    <span>Add to cart</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
