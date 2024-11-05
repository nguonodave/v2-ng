import React from "react";
import me from "../assets/images/me.jpg";

export default function Hero() {
    return (
        <div className="below-nav">
            <section className="mid-content hero">
                <div className="hero-text">
                    <p className="hero-greet">Hey there, Dave here.</p>
                    <h1 className="hero-name">David Ochiel</h1>
                    <h1 className="hero-intro">
                        I'm passionate about building digital solutions.
                    </h1>
                    <p className="hero-desc">
                        Currently mastering Golang and JavaScript at{" "}
                        <a href="https://www.zone01kisumu.ke/">
                            <span>Zone01 Kisumu</span>
                        </a>
                        . I love creating clean, efficient, and dynamic software
                        experiences.
                    </p>
                </div>
                {/* <div className="me">
                    <img src={me} alt="" />
                </div> */}
            </section>

            <footer>
                <p>footer</p>
            </footer>
        </div>
    );
}
