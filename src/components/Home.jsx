import React from "react";
import Footer from "./Footer";

export default function Home() {
    return (
        <div className="below-nav">
            <section className="mid-content hero">
                <div className="hero-text">
                    <p className="hero-role">Apprentice Software Engineer</p>
                    <h1 className="hero-name">David Ochiel</h1>
                    <h1 className="hero-intro">
                        I'm passionate about building digital solutions.
                    </h1>
                    <p className="hero-desc">
                        Currently mastering Golang and JavaScript at{" "}
                        <a href="https://www.zone01kisumu.ke/" target="_blank">
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

            <Footer />
        </div>
    );
}
