import React from 'react'


import CourseBannerImage from '../CourseBannerImage';
import CoursesDetails from '../CoursesDetails';
import Subscribe from '../Subscribe';

import RelatedCourse from '../RelatedCourse';
const CourseDetailPage = () => {
  return (
    <div>
      <CourseBannerImage/>     
       <CoursesDetails/>
     
      <RelatedCourse/>
      <Subscribe/>
    </div>
  )
}

export default CourseDetailPage
