import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="logo" href="">
                dave
            </a>
            <div className="menu">
                <ul>
                    <a href="">
                        <li>About</li>
                    </a>
                    <a href="">
                        <li>Experience</li>
                    </a>
                    <a href="">
                        <li>Projects</li>
                    </a>
                    <a href="">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>

            <a className="resume" href="">Resume</a>
        </nav>
    );
}
