import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="below-nav">
            <section className="mid-content contact-page">
                <h1 className="page-title">Hit Me Up.</h1>

                <div className="contact-desc">
                    <p>
                        Got something for me? My inbox is always open for a
                        chat, for new opportunities, or even just saying hi.
                        I'll do my best to get back to you.
                    </p>
                </div>

                <NavLink to="mailto:nguonodave@gmail.com" className="chat-btn">
                    Let's Chat
                </NavLink>
            </section>

            <Footer />
        </div>
    );
}
