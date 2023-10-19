import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";


function AccountNavigation() {
    const links = ["Notifications", "Profile", "Files", "Settings", "ePortfolios", "SharedContent", "TheHub", "QwicklyCourseTools", "GlobalAnnouncements"]
    //const { courseId } = useParams();
    const { pathname } = useLocation();
    return (        
        <div className="wd-account-navigation list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Account/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default AccountNavigation;