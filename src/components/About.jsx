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
                I am a tech problem-solver and creative thinker,
                currently shaping the future of technology at Synergy Informatics. As
                an aspiring Data Engineer, I thrive on transforming complex
                problems into efficient, data-driven solutions that are both
                reliable and innovative.
              </p>

              <p>
                My journey into tech began in my sophomore year at university,
                starting with web development and evolving into full-stack
                applications and data engineering. Beyond coding, my
                creativity as a pencil artist has influenced my approach to
                technology. I love bringing ideas from imagination to life,
                whether through sketches or building scalable software systems.
              </p>

              <p>
                At{" "}
                <a
                  href="https://synergyinformatics.co.ke/"
                  target="_blank"
                  title="Providing tech solutions to the medical industry."
                >
                  <span>Synergy Informatics</span>
                </a>
                , I develop advanced med-tech solutions, building intuitive, 
                high-performance platforms that reflect my commitment to clean code, 
                efficiency, and staying ahead in an ever-evolving tech landscape.
              </p>

              <p>
                Looking ahead, I aim to leverage my expertise in data
                engineering and analytics to drive impactful solutions that
                address global challenges, blending creativity, technology, and
                ethical practices. I've built functional, user-centered 
                platforms and consistently invest in learning, strengths that 
                reflect both my skill set and potential for future leadership in tech.
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
