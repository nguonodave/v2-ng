import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="below-nav">
            <section className="mid-content projects-page">
                <div className="about-wrapper">
                    <div className="about-text">
                        some text
                    </div>

                    <div className="about-image">
                        <img src="../images/new-me-bg.jpg" alt="" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
