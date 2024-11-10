import Footer from "../components/Footer";

export default function Experience() {
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
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </div>
                    <ul>
                        <li className="tab">this is co. 1</li>
                        <li className="tab">this is co. 2</li>
                        <li className="tab">this is co. 3</li>
                        <li className="tab">this is co. 4</li>
                        <li className="tab">this is co. 5</li>
                        <li className="tab">this is co. 6</li>
                        <li className="tab">this is co. 7</li>
                    </ul>
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>

                <div className="exp-details">
                    <h1>
                        Some Title
                        <span>
                            <a href=""> @ company</a>
                        </span>
                    </h1>

                    <p>start duration - end duration</p>

                    <div className="exp-desc">
                        <ul>
                            <li>xp 1</li>
                            <li>xp 2</li>
                            <li>xp 3</li>
                            <li>xp 4</li>
                            <li>xp 5</li>
                            <li>xp 6</li>
                            <li>xp 7</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
