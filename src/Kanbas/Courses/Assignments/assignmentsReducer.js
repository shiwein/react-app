import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: { 
        name: "New Assignment", 
        description: "New Description", 
        Points:"100",
        Due: "2023-11-02",
        AvailableFrom: "2023-11-02",
        Until:"2023-11-02",
    },
    selectedAssignment: null,
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            const assignment = state.assignments.find(a => a._id === action.payload);
            state.selectedAssignment = assignment || null;
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
