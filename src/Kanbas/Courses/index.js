import { useParams, Route, Routes, Navigate, useLocation } from "react-router";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


import { FiAlignJustify } from "react-icons/fi";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";



function Courses() {
  const {pathname} = useLocation()
    const [root, kanbas, courseName, id, screen] = pathname.split("/")
    const {courseId} = useParams()
    const [course, setCourse] = useState({});
    const URL = "http://localhost:4000/api/Courses";
    const findCourseById = async (courseId) => {
      const response = await axios.get(
        `${URL}/${courseId}`
      );
      setCourse(response.data);
    };  
    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]); 



  return (
    <div>
      <h6 className="red-text"><FiAlignJustify /> {course.name}</h6>
      <hr />
      <p> {course.number} </p>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}
export default Courses;
