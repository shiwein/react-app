import { Link, useLocation } from "react-router-dom";
function Nav() {
      const { pathname } = useLocation();
      return (
            <nav className="nav nav-tabs mt-2">
                  <Link to="/labs/lab3"
                        className={`nav-link ${pathname.includes("lab3") ? "active" : ""}`}>A3</Link>
                  <Link to="/labs/lab4"
                        className={`nav-link ${pathname.includes("lab4") ? "active" : ""}`}>A4</Link>
                  <Link to="/labs/lab5"
                        className={`nav-link ${pathname.includes("lab5") ? "active" : ""}`}>A5</Link>
                  <Link to="/labs/lab3/HelloWorld"
                        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
                  <Link to="/Kanbas"
                        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
                  <Link to="/project"
                        className={`nav-link ${pathname.includes("project") ? "active" : ""}`}>Project</Link>
            </nav>
      );
}
export default Nav;