// import db from "../../Database";
// import { Link } from "react-router-dom";

// function CourseListNavigation() {
//     const courses = db.courses;
//     return (
//         <div>
//             <h1>Courses</h1>
//             <hr />
//             <div>
//                 {courses.map((course, index) => (<div>
//                     <h5>{course.name}</h5>
//                     <Link
//                         key={course._id}
//                         to={`/Kanbas/Courses/${course._id}/Home`}
//                     >
//                         {course.number}<br />

//                     </Link>


//                 </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default CourseListNavigation;