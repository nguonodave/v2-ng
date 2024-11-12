import { useEffect, useState } from "react";
import experiences from "../experiences.json";
import Footer from "../components/Footer";

export default function Experience() {
    const [id, setId] = useState(1);

    function updateId(id) {
        setId(id);
    }

    useEffect(() => {
        const tabs = document.querySelector(".tabs");
        const tab = document.querySelectorAll(".tab");
        const sliderArrows = document.querySelectorAll(".icon svg");
        let isDragging = false;

        const arrowVisibility = () => {
            let scrollVal = Math.round(tabs.scrollLeft);
            let maxScrollableWidth = tabs.scrollWidth - tabs.clientWidth;
            sliderArrows[0].parentElement.style.display =
                scrollVal > 0 ? "flex" : "none";

            sliderArrows[1].parentElement.style.display =
                maxScrollableWidth > scrollVal ? "flex" : "none";
        };

        sliderArrows.forEach((icon) => {
            icon.addEventListener("click", () => {
                tabs.scrollLeft += icon.id === "left" ? -210 : 210;
                // arrowVisibility();
                setTimeout(() => arrowVisibility(), 33);
            });
        });

        tab.forEach((oneTab) => {
            oneTab.addEventListener("click", () => {
                tabs.querySelector(".tab-active").classList.remove(
                    "tab-active"
                );
                oneTab.classList.add("tab-active");
            });
        });

        const dragging = (e) => {
            if (!isDragging) return;
            tabs.classList.add("dragging");
            tabs.scrollLeft -= e.movementX;
            arrowVisibility();
        };

        const dragStop = () => {
            isDragging = false;
            tabs.classList.remove("dragging");
        };

        tabs.addEventListener("mousedown", () => (isDragging = true));
        tabs.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);

        // // cleanup the classes when the component unmounts
        // return () => {
        //     console.log("hey")
        // };
    });

    return (
        <div className="below-nav">
            <section className="mid-content experience-page">
                <p className="page-title exp-page-title">Work Experience</p>

                <div className="slider">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                            id="left"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </div>
                    <ul className="tabs">
                        {experiences.map((experience) => (
                            <li
                                onClick={() => updateId(experience.id)}
                                className={`tab ${
                                    experience.id === 1 ? "tab-active" : ""
                                }`}
                                key={experience.id}
                            >
                                {experience.companyName}
                            </li>
                        ))}

                        {/* <li className="tab">this is co. 2</li>
                        <li className="tab">this is co. 3</li>
                        <li className="tab">this is co. 4</li>
                        <li className="tab">this is co. 5</li>
                        <li className="tab">this is co. 6</li>
                        <li className="tab">this is co. 7</li> */}
                    </ul>
                    <div className="icon active">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                            id="right"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>

                {experiences.map((experience) => (
                    <div
                        key={experience.id}
                        className={`exp-details ${
                            id === experience.id ? "active" : ""
                        }`}
                    >
                        <div className="details-content">
                            <p className="exp-header">
                                <span className="exp-title">
                                    {experience.title}
                                </span>

                                <span className="exp-arrow">&#8594;</span>

                                <span>
                                    <a
                                        className="exp-company"
                                        href={experience.companyLink}
                                        target="_blank"
                                    >
                                        {experience.companyName}
                                    </a>
                                </span>
                            </p>

                            <p className="exp-period">{experience.period}</p>

                            <div className="exp-desc">
                                <ul className="exp-list">
                                    {experience.experienceGains.map(
                                        (experienceGain, index) => (
                                            <li key={index}>
                                                {experienceGain}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </div>
    );
}
