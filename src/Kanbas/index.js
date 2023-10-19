import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calender from "./Calendar";
import Inbox from "./Inbox";
import History from "./History";
import Studio from "./Studio";
import Commons from "./Commons";
import Help from "./Help";

function Kanbas() {
  return (
    <div className="row">
      <div className="col-1">
        <KanbasNavigation />
      </div>
        <div className="col-11">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account/*" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calender" element={<Calender />} />
            <Route path="Inbox" element={<Inbox />} />z
            <Route path="History" element={<History />} />
            <Route path="Studio" element={<Studio />} />
            <Route path="Commons" element={<Commons />} />
            <Route path="Help" element={<Help />} />
          </Routes>
        </div>
      </div>
  );
}
export default Kanbas;