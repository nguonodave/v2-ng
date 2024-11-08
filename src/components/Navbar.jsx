import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "nav-link royal-hover active-nav-link"
            : "nav-link royal-hover";

    return (
        <nav className="navbar">
            <div className="top-menu">
                <NavLink className="logo royal-hover" to="/">
                    dave
                </NavLink>

                <div className="menu">
                    <NavLink to="/about" className={navLinkClass}>
                        About
                    </NavLink>

                    <NavLink to="/experience" className={navLinkClass}>
                        Experience
                    </NavLink>

                    <NavLink to="/projects" className={navLinkClass}>
                        Projects
                    </NavLink>

                    <NavLink to="/contact" className={navLinkClass}>
                        Contact
                    </NavLink>
                </div>

                <div className="top-left-nav">
                    <NavLink className="resume nav-link royal-hover" to="">
                        Resume
                    </NavLink>

                    <Hamburger />
                </div>
            </div>

            <div className="side-menu">
                <div className="content">
                    <NavLink to="/about" className="">
                        About
                    </NavLink>

                    <NavLink to="/experience" className="">
                        Experience
                    </NavLink>

                    <NavLink to="/projects" className="">
                        Projects
                    </NavLink>
                    
                    <NavLink to="/contact" className="">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
