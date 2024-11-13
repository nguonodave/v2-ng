import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="below-nav">
            <section className="mid-content projects-page">
                <div className="about-wrapper">
                    <div className="about-text">
                        <div className="paragraphs">
                            <p>
                                Hey there, Dave here. I'm a coder,
                                problem-solver, and tech explorer who thrives on
                                building things that work—and work well. My
                                journey into the world of tech started back in
                                high school, and it's been one wild ride ever
                                since. I started with the basics of web
                                development, and now I'm diving deep into
                                full-stack applications that bring ideas to
                                life.
                            </p>

                            <p>
                                These days, I'm shaping the future of tech at{" "}
                                <a
                                    href="https://www.zone01kisumu.ke/"
                                    target="_blank"
                                >
                                    <span>Zone01 Kisumu</span>
                                </a>
                                , where I get to build intuitive,
                                high-performance platforms using a mix of modern
                                tools. Efficiency, clean code, and keeping up
                                with the ever-evolving tech world are my driving
                                forces—because let's face it, tech waits for no
                                one.
                            </p>

                            <p>
                                I'm always on the lookout for new challenges to
                                tackle and cool projects to build. If you've got
                                an idea or a problem to solve, let's chat and
                                create something awesome!
                            </p>

                            <p>What's in my toolbox?</p>
                        </div>

                        <div className="skills">
                            <ul>
                                <li><span>Backend:</span> Golang, Python (Django)</li>
                                <li><span>Frontend:</span> JavaScript (ES6), React</li>
                                <li><span>Database:</span> SQL</li>
                                <li><span>Core Web:</span> HTML, CSS</li>
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
