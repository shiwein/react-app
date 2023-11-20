import KanbasNavigation from "./KanbasNavigation";
import { Route, Routes, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
// import db from "./Database";
import { useState, useEffect} from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";



function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const URL = "http://localhost:4000/api/Courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };


  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };


  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  }



  useEffect(() => {
    findAllCourses();
  }, []);


  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-1 d-none d-md-block" style={{width: "100px"}}>
          <KanbasNavigation/>
        </div>
        <div className="col">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard"/>}/>
                <Route path="Account" element={<Account/>}/>
                <Route path="Dashboard" element={<Dashboard 
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  // addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>}/>
                <Route path="Courses/:courseId/*" element={<Courses/>}/>
                <Route path="Courses" element={<Dashboard 
                  courses={courses} 
                  course={course}
                  setCourse={setCourse}
                  // addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>}/>
            </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;