import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

import img from "./img.png"


function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="g-4 row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {courses.map((course, index) => (<div className="col">
        <link>
        </link>
          <div class="dashboard-card-size">
            <img src={img} class="card-img-top dashboard-img" alt="..." />

            <div class="dashboard-card-body">
              <h5 class="dashboard-card-title">{course.name}</h5>

              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="dashboard-card-link"
              >
                {course.number}<br/>
                202410_2 Fall 2023 Semester Full
                
              </Link>
              {/* <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default Dashboard;