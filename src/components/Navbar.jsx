import React from "react";
import logo from "../assets/images/davelogo.png";

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <p>Navbar</p>
        </div>
    );
}
