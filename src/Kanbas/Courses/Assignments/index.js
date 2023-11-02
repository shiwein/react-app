import React, { useState } from "react";
import AssignmentList from "./AssignmentList";
import AssignmentEditor from "./AssignmentEditor/index";

function Assignments() {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleAddAssignment = () => {
    setSelectedAssignment(null); // Setting to null since it's a new assignment
    setShowEditor(true);
  };

  const handleEditAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setShowEditor(true);
  };

  return (
    <div>
      {showEditor ? (
        <AssignmentEditor 
            initialData={selectedAssignment} 
            onClose={() => setShowEditor(false)} 
        />
      ) : (
      <div className="row">
        <div>
          <button className="btn wd-float-right">...</button>
          <button className="btn wd-float-right btn-danger" onClick={handleAddAssignment}>
            +Assignment
          </button>
          <button className="btn btn-secondary wd-float-right">+Group</button>
        </div><hr />
        <div>
          <AssignmentList onEdit={handleEditAssignment} />
        </div>
      </div>
      )}
    </div>
  );
}

export default Assignments;
