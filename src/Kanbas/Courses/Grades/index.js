import db from "../../Database";
import { useParams } from "react-router-dom";
import {IoSettingsSharp} from "react-icons/io5";
import {CiImport} from "react-icons/ci";
import {CiExport} from "react-icons/ci";
import {LiaFilterSolid} from "react-icons/lia";
import "./index.css"

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div>
                <button className="btn btn-secondary  wd-float-right"><IoSettingsSharp /></button>
                <button className="btn btn-secondary wd-float-right"><CiExport /> Export</button>
                <button className="btn btn-secondary  wd-float-right"><CiImport /> Import</button>
            </div>
            <br></br>

            <div className="row">
                <div className="col-md-6">
                    <h5>Student Name</h5>
                    <div id="student-name" className="col">
                        <label class="form-label"></label>
                        <input type="text" className="form-control" placeholder="Search Student"></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>Assignment Name</h5>
                    <div id="assignment-name" className="col">
                        <label class="form-label"></label>
                        <input type="text" className="form-control" placeholder="Search Assignments"></input>
                    </div>
                </div>
            </div>
            <br></br>

            <div>
                <button className="btn btn-secondary"><LiaFilterSolid /> Apply Files</button>
            </div>
            <hr />

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;
