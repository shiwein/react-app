import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    deleteAssignment,
} from './assignmentsReducer';
import ConfirmationModal from './ConfirmationModal';
// import AssignmentEditor from "./AssignmentEditor/index";

function AssignmentList({onEdit}) {
    // const navigate = useNavigate();
    // const { assignmentId } = useParams();
    const assignments = useSelector(state => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();

    const handleEditClick = (id) => {
        const selectedAssignment = assignments.find(a => a._id === id);
        onEdit(selectedAssignment); // Call the provided onEdit function
    };    
      

    const [showModal, setShowModal] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState(null);

    const handleDeleteClick = (id) => {
        setAssignmentToDelete(id);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        dispatch(deleteAssignment(assignmentToDelete));
        setAssignmentToDelete(null);
        setShowModal(false);
    };

    return (
        <ul className="list-group">
            {showModal && <ConfirmationModal onClose={() => setShowModal(false)} onConfirm={handleConfirmDelete} />}
            {assignments.map((assignment) => (
                <li key={assignment._id} className="list-group-item d-flex" onClick={() => handleEditClick(assignment._id)}>
                    <div style={{ flexGrow: 1 }}>
                        <h3>{assignment.course}</h3>
                        <p>{assignment.title}</p>
                        <p>{assignment._id}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <button
                            style={{ marginRight: '10px' }}
                            className="btn btn-danger"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteClick(assignment._id);
                            }}>
                            Delete
                        </button>
                        <button
                            style={{ marginRight: '10px' }}
                            className="btn btn-success"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleEditClick(assignment._id);
                            }}>
                            Edit
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default AssignmentList;
