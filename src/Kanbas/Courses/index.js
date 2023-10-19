import React from "react";
import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Announcements from "./Announcements";
import Collaborations from "./Collaborations";
import Discussions from "./Discussions";
import Files from "./Files";
import Outcomes from "./Outcomes";
import Pages from "./Pages";
import PanoptoVideo from "./PanoptoVideo";
import People from "./People";
import Piazza from "./Piazza";
import Quizzes from "./Quizzes";
import Rubrics from "./Rubrics";
import Settings from "./Settings";
import Syllabus from "./Syllabus";
import ZoomMeeting from "./ZoomMeeting";
import {FiAlignJustify} from "react-icons/fi";
import "./index.css";


function Courses() {
  const { courseId } = useParams();
  const {courseNumber} = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const number =db.courses.find((course) => course.number ===courseNumber);

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
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="Announcements" element={<Announcements />} />
            <Route path="Collaborations" element={<Collaborations />} />
            <Route path="Discussions" element={<Discussions />} />
            <Route path="Files" element={<Files />} />
            <Route path="Outcomes" element={<Outcomes />} />
            <Route path="Pages" element={<Pages />} />
            <Route path="People" element={<People />} />
            <Route path="Piazza" element={<Piazza />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Rubrics" element={<Rubrics />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Syllabus" element={<Syllabus />} />
            <Route path="ZoomMeeting" element={<ZoomMeeting />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}
export default Courses;
