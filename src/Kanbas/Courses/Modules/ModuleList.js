import React from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();



  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                style={{ width: '100%', marginBottom: '10px' }}
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))}
              />
              <textarea
                className="form-control"
                style={{ width: '100%' }}
                value={module.description}
                onChange={(e) =>
                  dispatch(setModule({ ...module, description: e.target.value }))}
              />
            </div>
            <div className="col">
              <button
                style={{ marginRight: '10px' }}
                className="btn btn-primary"
                onClick={() => dispatch(updateModule(module))}>
                Update
              </button>
              <button
                className="btn btn-success"
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
              </button>
            </div>
          </div>
        </div>
      </li>
      <div>
        {modules.filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item d-flex">
              <div style={{ flexGrow: 1 }}>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                <p>{module._id}</p>
              </div>

              <div className="d-flex align-items-center">
                <button
                  style={{ marginRight: '10px' }}
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button
                  style={{ marginRight: '10px' }}
                  className="btn btn-success"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
              </div>
            </li>
          ))
        }
      </div>
    </ul>
  );
}
export default ModuleList;