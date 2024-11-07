import { NavLink } from "react-router-dom";

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "nav-link royal-hover active-nav-link"
            : "nav-link royal-hover";

    return (
        <nav className="navbar">
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

            <NavLink className="resume nav-link royal-hover" to="">
                Resume
            </NavLink>
        </nav>
    );
}
