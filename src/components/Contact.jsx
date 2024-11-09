import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <div className="below-nav">
                <section className="mid-content projects-page">
                    <p className="page-title">Holla Me Up.</p>

                    <div className="contact-desc">
                        <p>
                            Got something for me? My inbox is always open for a
                            chat, for new opportunities, or even just saying hi.
                            I'll do my best to get back to you.
                        </p>
                    </div>

                    <NavLink to="mailto:nguonodave@gmail.com">HMU</NavLink>
                </section>

                <Footer />
            </div>
        </div>
    );
}
