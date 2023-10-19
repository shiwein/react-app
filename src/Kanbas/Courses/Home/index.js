import { Link } from "react-router-dom";
import ModuleList from "../Modules/ModuleList";
import "./index.css";



function Home() {
  return (
    <div>
      <div className="row">
        <div>
          <button className="btn btn-danger wd-float-right">+ Module</button>
          <button className="btn wd-float-right select-btn">
            <select className="form-select">
              <option value="All">Publish All</option>
              <option>1</option>
              <option>2</option>
            </select>
          </button>
          <button className="btn btn-secondary wd-float-right">Collapse All</button>
          <button className="btn btn-secondary wd-float-right">View Progress</button>
        </div><hr />
        <div>
          <ModuleList />
        </div>
      </div>
    </div>
  );
}
export default Home;