// import React, { useState } from "react";
// import "../css/addtocart.scss"; // Import CSS
// import uiuxcourse from "../assest/uiuxcourse.png";

// import deleteiconblue from "../assest/deleteiconblue.png";
// import deleteiconwhite from "../assest/deleteiconwhite.png";
// const AddToCart = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="container dv-AddToCart mt-5 mb-5">
//       <h1 className="dv-h1 pt-5 pb-5">ADD TO CART</h1>

//       <div className="row">
//         <div className="col-3 col-sm-3 col-md-3 col-lg-3">
//           <img className="w-100 " src={uiuxcourse} alt={uiuxcourse} />
//         </div>

//         <div className="col-9 col-sm-9 col-md-9 col-lg-9">
//           <div>
//             <h3 className="h4">Learn- SQL Essential Training</h3>
//           </div>

//           <div className="row">
//             <div className="col-6 col-sm-6 col-md-6 col-lg-6">
//               <div>
//                 <h5 className="style-h5  ">Rs. 399/-</h5>
//               </div>
//             </div>

//             <div className="col-6 col-sm-6 col-md-6 col-lg-6">
//             <div className="btn-style ">
//         <button
//           className="btn"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div>
//             <span className="span">REMOVE</span>
//             <img
//               src={isHovered ? deleteiconblue : deleteiconwhite}
//               alt="add-to-cart"
//               className="deleteicon"
//             />
//           </div>
//         </button>
//       </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr></hr>
//       <div className="row">
//         <div className="col-3 col-sm-3 col-md-3 col-lg-3">
//           <img className="w-100 " src={uiuxcourse} alt={uiuxcourse} />
//         </div>

//         <div className="col-9 col-sm-9 col-md-9 col-lg-9">
//           <div>
//             <h3 className="h4">Learn- SQL Essential Training</h3>
//           </div>

//           <div className="row">
//             <div className="col-6 col-sm-6 col-md-6 col-lg-6">
//               <div>
//                 <h5 className="style-h5  ">Rs. 399/-</h5>
//               </div>
//             </div>

//             <div className="col-6 col-sm-6 col-md-6 col-lg-6">
//             <div className="btn-style ">
//         <button
//           className="btn"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div>
//             <span className="span">REMOVE</span>
//             <img
//               src={isHovered ? deleteiconblue : deleteiconwhite}
//               alt="add-to-cart"
//               className="deleteicon"
//             />
//           </div>
//         </button>
//       </div>
//             </div>
//           </div>
//         </div>
//       </div>
// <hr></hr>
//       <div className="row">
//         <div className="col-3 col-sm-3 col-md-3 col-lg-3">
//           <img className="w-100 " src={uiuxcourse} alt={uiuxcourse} />
//         </div>

//         <div className="col-9 col-sm-9 col-md-9 col-lg-9">
//           <div>
//             <h3 className="h4">Learn- SQL Essential Training</h3>
//           </div>

//           <div className="row">
//             <div className="col-6 col-sm-6 col-md-6 col-lg-6">
//               <div>
//                 <h5 className="style-h5  ">Rs. 399/-</h5>
//               </div>
//             </div>

//             <div className="col-6 col-sm-6 col-md-6 col-lg-6">
//             <div className="btn-style ">
//         <button
//           className="btn"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div>
//             <span className="span">REMOVE</span>
//             <img
//               src={isHovered ? deleteiconblue : deleteiconwhite}
//               alt="add-to-cart"
//               className="deleteicon"
//             />
//           </div>
//         </button>
//       </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
import React, { useState } from "react";
import "../css/addtocart.scss"; // Import CSS
import uiuxcourse from "../assest/uiuxcourse.png";
import deleteiconblue from "../assest/deleteiconblue.png";
import deleteiconwhite from "../assest/deleteiconwhite.png";

const AddToCart = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Learn SQL Essential Training",
      price: 399,
      image: uiuxcourse,
    },
    // Add more courses as needed
  ]);

  const [isHovered, setIsHovered] = useState(null);

  const handleRemoveCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    setIsHovered(null);
  };

  return (
    <div className="container dv-AddToCart mt-5 mb-5">
      <h1 className="dv-h1 pt-5 pb-5">ADD TO CART</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
              <img className="w-100" src={course.image} alt={course.name} />
            </div>

            <div className="col-9 col-sm-9 col-md-9 col-lg-9">
              <div>
                <h3 className="h4">{course.name}</h3>
              </div>

              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <div>
                    <h5 className="style-h5  ">Rs. {course.price}/-</h5>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="btn-style ">
                    <button
                      className="btn"
                      onMouseEnter={() => setIsHovered(course.id)}
                      onMouseLeave={() => setIsHovered(null)}
                      onClick={() => handleRemoveCourse(course.id)}
                    >
                      <div>
                        <span className="span">REMOVE</span>
                        <img
                          src={
                            isHovered === course.id
                              ? deleteiconblue
                              : deleteiconwhite
                          }
                          alt="add-to-cart"
                          className="deleteicon"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
