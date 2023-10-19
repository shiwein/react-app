import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./assignment.css";
import {FcOk, FcAcceptDatabase} from "react-icons/fc";
import {BiGridVertical,BiDotsVertical} from "react-icons/bi";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="row">
        <div>
          <div id="student-name" className="col">
            <label class="form-label"></label>
            <input type="text" className="form-control" placeholder="Search Assignment"></input>
          </div>
          <div className="col">
            <button className="btn btn-secondary wd-float-right">...</button>
            <button className="btn btn-danger wd-float-right">+ Assignments</button>
            <button className="btn btn-secondary wd-float-right">+ Group</button>
          </div>
        </div><hr />
        <div>
          <div className="list-group">
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item">
                <BiGridVertical /><FcAcceptDatabase /> {assignment.title} <div className="icon-container"><FcOk /><BiDotsVertical /></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;




