import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Divide as Ham } from "hamburger-react";

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "nav-link royal-hover active-nav-link"
            : "nav-link royal-hover";

    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    useEffect(() => {
        function handleClick(event) {
            // Check if click target is outside the side-menu
            const isSideMenu = event.target.closest(".side-menu");
            const isHamburger = event.target.closest(".hamburger");

            // If click is outside both side-menu and hamburger, close the menu
            if (!isSideMenu && !isHamburger && sideMenuOpen) {
                setSideMenuOpen(false);
            }
        }

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [sideMenuOpen]);

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
                    Dave
                </NavLink>

                <div className="menu">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

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
                    <a
                        className="resume nav-link royal-hover"
                        href="../David-Ng'uono-Ochiel-CV.pdf"
                        target="_blank"
                    >
                        Resume
                    </a>

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
                    <NavLink
                        to="/"
                        className={navLinkClass}
                        onClick={closeSideMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={navLinkClass}
                        onClick={closeSideMenu}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/experience"
                        className={navLinkClass}
                        onClick={closeSideMenu}
                    >
                        Experience
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={navLinkClass}
                        onClick={closeSideMenu}
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={navLinkClass}
                        onClick={closeSideMenu}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
