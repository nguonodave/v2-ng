import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="logo royal-hover" href="">
                dave
            </a>
            <div className="menu">
                <ul>
                    <a href="">
                        <li className="royal-hover">About</li>
                    </a>
                    <a href="">
                        <li className="royal-hover">Experience</li>
                    </a>
                    <a href="">
                        <li className="royal-hover">Projects</li>
                    </a>
                    <a href="">
                        <li className="royal-hover">Contact</li>
                    </a>
                </ul>
            </div>

            <a className="resume royal-hover" href="">Resume</a>
        </nav>
    );
}
