import Footer from "../components/Footer";

export default function Experience() {
    return (
        <div className="below-nav">
            <section className="mid-content experience-page">
                <p className="page-title">My Experience</p>

                <div className="slider">some slider</div>

                <h1>
                    Some Title
                    <span>
                        <a href="">@ company</a>
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
            </section>
            <Footer />
        </div>
    );
}
