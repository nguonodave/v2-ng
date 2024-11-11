import Footer from "../components/Footer";
import projects from "../projects.json";

export default function Projects() {
    return (
        <div className="below-nav">
            <section className="mid-content projects-page">
                <p className="page-title">Projects</p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <a
                            className="project-card"
                            href={
                                project.links.demo
                                    ? project.links.demo
                                    : project.links.github
                            }
                            target="_blank"
                            key={project.id}
                        >
                            <img
                                src={`../src/assets/images/${project.image}`}
                                alt=""
                                className="block"
                            />

                            <div className="card-body">
                                <h1 className="card-title">{project.name}</h1>

                                <section className="card-desc">
                                    <p>{project.description}</p>
                                </section>

                                <footer className="card-footer">
                                    <ul>
                                        {project.tools.map((tool, index) => (
                                            <li key={index}>{tool}</li>
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
