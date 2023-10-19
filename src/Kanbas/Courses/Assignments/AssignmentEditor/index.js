import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./AssignmentEditor.css";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment.title}
        className="form-control" />

      <div className="mb-3">
        <label for="textarea1" className="form-label">
        </label>
        <textarea className="form-control" id="textarea1" rows="5"
          placeholder="This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify."></textarea>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <label for="text"><h6>Points</h6> </label>
        </div>
        <div className="col-6">
          <input id="text" placeholder="100" class="form-control"></input>
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <h6>Assignment Group</h6>
        </div>
        <div className="col-6">
          <select className="form-select">
            <option selected>Assignment</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <h6>Dispaly Grade as</h6>
        </div>
        <div className="col-6">
          <select className="form-select">
            <option selected>Percentage</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>


      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <input type="checkbox" value="This is a group assignment"></input>
        </div>
        <div className="col-6">
          <label for="Group Assignment"><h6>Do not count this assignment towarts the final grade</h6></label>
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <h6>Submission Type</h6>
        </div>
        <div className="col-6">
          <select className="form-select">
            <option selected>Online</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <label><h6>online Entry Option</h6></label>
        </div>
        <div className="col-6">
          <input type="checkbox" value="Text Entry" name="check-genre"
            id="chkbox-comedy" checked />
          <label for="chkbox-comedy">Text Entry</label> <br />
          <input type="checkbox" value="Website URL" name="check-genre"
            id="chkbox-drama" />
          <label for="chkbox-drama">Website URL</label> <br />
          <input type="checkbox" value="Media Recordings" name="check-genre"
            id="chkbox-scifi" />
          <label for="chkbox-scifi">Media Recordings</label> <br />
          <input type="checkbox" value="Student Annotation" name="check-genre"
            id="chkbox-fantasy" />
          <label for="chkbox-fantasy">Student Annotation</label><br />
          <input type="checkbox" value="File Uploads" name="check-genre"
            id="chkbox-fantasy" />
          <label for="chkbox-fantasy">File Uploads</label>
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <label className="form-label">
            <h6>Assign to</h6></label>
        </div>
        <div className="col-6">
          <input type="email" className="form-control" id="input1"
            placeholder="Everyone      X"></input>
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <label className="form-label">
            <h6>Due</h6></label>
        </div>
        <div className="col-6">
          <input type="date" id="text-fields-dob"
            value="2000-01-21" />
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <label className="form-label">
            <h6>Available form</h6></label>
        </div>
        <div className="col-6">
          <input type="date" id="text-fields-dob"
            value="2000-01-21" />
        </div>
      </div>

      <div className="row g-3 align-item-center wd-form-margin">
        <div className="col-2">
          <label className="form-label">
            <h6>Until</h6></label>
        </div>
        <div className="col-6">
          <input type="date" id="text-fields-dob"
            value="2000-01-21" /><br />
        </div>
      </div>

      <hr></hr>

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;


