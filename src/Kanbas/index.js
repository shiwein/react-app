import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calender from "./Calendar";
import Inbox from "./Inbox";
import History from "./History";
import Studio from "./Studio";
import Commons from "./Commons";
import Help from "./Help";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";



function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-1">
          <KanbasNavigation />
        </div>
        <div className="col-11">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account/*" element={<Account />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />}
            />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />
            <Route path="Courses/:courseId/assignments/:assignmentId/*" element={<AssignmentEditor />} />
            <Route path="Calender" element={<Calender />} />
            <Route path="Inbox" element={<Inbox />} />
            <Route path="History" element={<History />} />
            <Route path="Studio" element={<Studio />} />
            <Route path="Commons" element={<Commons />} />
            <Route path="Help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;