import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="logo royal-hover" to="/">
                dave
            </NavLink>

            <div className="menu">
                <NavLink to="" className="nav-link royal-hover">
                    About
                </NavLink>

                <NavLink to="" className="nav-link royal-hover">
                    Experience
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "nav-link royal-hover active-nav-link" : "nav-link royal-hover"
                    }
                >
                    Projects
                </NavLink>

                <NavLink to="" className="nav-link royal-hover">
                    Contact
                </NavLink>
            </div>

            <NavLink className="resume nav-link royal-hover" to="">
                Resume
            </NavLink>
        </nav>
    );
}
