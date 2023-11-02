import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import Courses from "../Courses";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses,
    {
      ...course,
      _id: new Date().getTime()
    }]);
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
    )
  }
  

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h5>Published Courses({courses.length})</h5>
      <hr />
      <div className="container">
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control"
          onCanPlay={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date"
          onCanPlay={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        <br />
        <div className="container">
          <button
            style={{ marginRight: '10px' }}
            className="btn btn-success"
            onClick={addNewCourse} >
            Add
          </button>
          <button
            className="btn btn-primary mr-4"
            onClick={updateCourse} >
            Update
          </button>
        </div>
      </div>
      <br />
      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item d-flex justify-content-between">
            {course.name}
            <div className="d-flex align-items-center">
              <button
                style={{ marginRight: '10px' }}
                className="btn btn-warning"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>
              <button
                style={{ marginRight: '10px' }}
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                Delete
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
