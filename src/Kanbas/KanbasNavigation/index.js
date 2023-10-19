import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi";
import {AiOutlineDashboard} from "react-icons/ai";
import {BiBookAlt} from "react-icons/bi";
import {BsCalendarWeek} from "react-icons/bs";
import {BsBox} from "react-icons/bs";
import {BiTime} from "react-icons/bi";
import {FiMonitor} from "react-icons/fi";
import {BsChatDots} from "react-icons/bs";
import {BiHelpCircle} from "react-icons/bi";
import NEU_LOGO from "./NEU_LOGO.jpeg";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calender", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon-account" />,
    Dashboard: <AiOutlineDashboard className="wd-icon" />,
    Courses: <BiBookAlt className="wd-icon" />,
    Calender: <BsCalendarWeek className="wd-icon" />,
    Inbox: <BsBox className="wd-icon" />,
    History: <BiTime className="wd-icon" />,
    Studio: <FiMonitor className="wd-icon" />,
    Commons: <BsChatDots className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      <img src={NEU_LOGO} alt="logo"></img>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;