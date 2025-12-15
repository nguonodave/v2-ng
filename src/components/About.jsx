import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="below-nav">
      <section className="mid-content projects-page">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="paragraphs">
              <p>
                David Ochiel is a tech problem-solver and creative thinker,
                currently shaping the future of technology at Zone01 Kisumu. As
                an aspiring Data Engineer, he thrives on transforming complex
                problems into efficient, data-driven solutions that are both
                reliable and innovative.
              </p>

              <p>
                His journey into tech began in his sophomore year at university,
                starting with web development and evolving into full-stack
                applications and data engineering. Beyond coding, David's
                creativity as a pencil artist has influenced his approach to
                technology. He loves bringing ideas from imagination to life,
                whether through sketches or building scalable software systems.
              </p>

              <p>
                At{" "}
                <a
                  href="https://www.zone01kisumu.ke/"
                  target="_blank"
                  title="Recoding the world with African talent."
                >
                  <span>Zone01 Kisumu</span>
                </a>
                , he has built intuitive, high-performance platforms that
                reflect his commitment to clean code, efficiency, and staying
                ahead in an ever-evolving tech landscape.
              </p>

              <p>
                Looking ahead, David aims to leverage his expertise in data
                engineering and analytics to drive impactful solutions that
                address global challenges, blending creativity, technology, and
                ethical practices. His achievements in building functional,
                user-centered platforms and his dedication to continuous
                learning demonstrate both his skill set and his potential for
                future leadership in tech.
              </p>

              <p>What's in my toolbox?</p>
            </div>

            <div className="skills">
              <ul>
                <li>
                  <span>Backend:</span> Golang, Python (Django)
                </li>
                <li>
                  <span>Frontend:</span> JavaScript (ES6), React
                </li>
                <li>
                  <span>Database:</span> SQL
                </li>
                <li>
                  <span>Core Web:</span> HTML, CSS
                </li>
                <li>
                  <span>Development Tools & Platforms:</span> Docker, Git,
                  GitHub, Figma, Vercel, Netlify
                </li>
              </ul>
            </div>
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
