import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addAssignment, updateAssignment } from "../assignmentsReducer";

function AssignmentEditor({ initialData, propData, courseId }) { // 1. Extract courseId from props
    const [assignment, setAssignment] = useState({
        name: initialData?.name || "New Assignment",
        description: initialData?.description || "New Description",
        dueDate: initialData?.Due || "2023-11-02",
        availableFromDate: initialData?.AvailableFrom || "2023-11-02",
        availableUntilDate: initialData?.Until || "2023-11-02",
    });
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAssignment(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (initialData) {
            const updatedAssignment = {
                ...initialData,
                ...assignment
            };
            dispatch(updateAssignment(updatedAssignment));
        } else {
            const newAssignment = {
                ...assignment,
                _id: new Date().getTime().toString()
            };
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Courses/${courseId}/assignments/*`); // 2. Use backticks for template literals
    };

    const handleCancel = () => {
        navigate(`/Courses/${courseId}/assignments`); // 3. Navigate back to the assignments list on cancel
    };

    return (
        <div>
            <input 
                name="name" 
                value={assignment.name} 
                onChange={handleInputChange} 
                placeholder="Name" 
            />
            <textarea 
                name="description"
                value={assignment.description} 
                onChange={handleInputChange} 
                placeholder="Description"
            ></textarea>
            <input 
                type="date" 
                name="dueDate" 
                value={assignment.dueDate} 
                onChange={handleInputChange} 
            />
            <input 
                type="date" 
                name="availableFromDate" 
                value={assignment.availableFromDate} 
                onChange={handleInputChange} 
            />
            <input 
                type="date" 
                name="availableUntilDate" 
                value={assignment.availableUntilDate} 
                onChange={handleInputChange} 
            />

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default AssignmentEditor;
