import Footer from "../components/Footer";
import projects from "../projects.json";

export default function Projects() {
    return (
        <div className="below-nav">
            <section className="mid-content">
                <p>ProjectsPage</p>

                <div className="projects-grid">
                    {projects.map((job) => (
                        <a
                            class="project-card"
                            href={job.links.demo ? job.links.demo : job.links.github}
                            target="_blank"
                        >
                            <img
                                src={`../src/assets/images/${job.image}`}
                                alt=""
                                class="block"
                            />

                            <div class="card-body">
                                <nav class="card-nav">
                                    <h1>{job.name}</h1>
                                    <div class="card-icons">
                                        <p>icon1</p>
                                        <p>icon2</p>
                                    </div>
                                </nav>

                                <section class="card-desc">
                                    <p>{job.description}</p>
                                </section>

                                <footer class="card-footer">
                                    <ul>
                                        {job.tools.map((tool) => (
                                            <li>{tool}</li>
                                        ))}
                                    </ul>
                                </footer>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
