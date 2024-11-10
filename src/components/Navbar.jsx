import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Divide as Ham } from "hamburger-react";

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "nav-link royal-hover active-nav-link"
            : "nav-link royal-hover";

    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    // sync html elements behavior when the side menu is open/closed
    useEffect(() => {
        const html = document.querySelector("html");
        const belowNav = document.querySelector(".below-nav");
        const logo = document.querySelector(".logo");
        const resume = document.querySelector(".resume");

        if (sideMenuOpen) {
            html.classList.add("overflow-y-hidden");
            belowNav.classList.add("blur-active");
            logo.classList.add("blur-active");
            resume.classList.add("blur-active");
        } else {
            html.classList.remove("overflow-y-hidden");
            belowNav.classList.remove("blur-active");
            logo.classList.remove("blur-active");
            resume.classList.remove("blur-active");
        }

        // cleanup the classes when the component unmounts or sideMenuOpen changes
        return () => {
            html.classList.remove("overflow-y-hidden");
            belowNav.classList.remove("blur-active");
            logo.classList.remove("blur-active");
            resume.classList.remove("blur-active");
        };
    }, [sideMenuOpen]);

    const closeSideMenu = () => {
        setSideMenuOpen(false);
    };

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

                    <div className="hamburger">
                        <Ham
                            size={25}
                            toggled={sideMenuOpen}
                            toggle={setSideMenuOpen}
                        />
                    </div>
                </div>
            </div>

            <div className={`side-menu ${sideMenuOpen ? "active" : ""}`}>
                <div className="content">
                    <NavLink to="/about" className="" onClick={closeSideMenu}>
                        About
                    </NavLink>

                    <NavLink
                        to="/experience"
                        className=""
                        onClick={closeSideMenu}
                    >
                        Experience
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className=""
                        onClick={closeSideMenu}
                    >
                        Projects
                    </NavLink>

                    <NavLink to="/contact" className="" onClick={closeSideMenu}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
