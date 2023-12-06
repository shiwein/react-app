import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const URL = "https://kanbas-node-server-app-vj5k.onrender.com/lab5/assignment";
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };

    const updateTitle = async () => {
        const response = await axios
            .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);


    return (
        <div>
            <h3>Working With Object</h3>
            <br />
            <h4>Retrieving Object</h4>
            <a href="https://kanbas-node-server-app-vj5k.onrender.com/lab5/assignment"
                className="btn btn-primary me-2">
                Get Assignment
            </a>
            <br /><br />
            <h4>Retrieving Properties</h4>
            <a
                href="https://kanbas-node-server-app-vj5k.onrender.com/lab5/assignment/title"
                className="btn btn-primary me-2">
                Get Title
            </a>
            <br /><br />
            <h4>Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Title
            </a>
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text" />
            <br /><br />
            <h4>Modifying the score</h4>
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-1 float-end"
            >
                Update Score
            </a>
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: e.target.value
                })}
                value={assignment.score}
                className="form-control mb-2 w-75"
                type="number"
            />
            <br /><br />
            <h4>Completed Properties Of The Assignment</h4>
            <a
                href={`${URL}/completed/${assignment.completed}`}
                className="btn btn-primary me-1 float-end"
            >
                Completed
            </a>
            <label>
                Mark as Completed
                <input
                    onChange={(e) => setAssignment({
                        ...assignment,
                        completed: e.target.checked
                    })}
                    checked={assignment.completed}
                    type="checkbox"
                />
            </label>
            <br /><br />
            <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
        </div>
    );
};
export default WorkingWithObjects;