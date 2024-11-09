import Footer from "../components/Footer";
import projects from "../projects.json";

export default function Projects() {
    return (
        <div className="below-nav">
            <section className="mid-content projects-page">
                <p className="page-title">Projects</p>

                <div className="projects-grid">
                    {projects.map((job) => (
                        <a
                            className="project-card"
                            href={
                                job.links.demo
                                    ? job.links.demo
                                    : job.links.github
                            }
                            target="_blank"
                            key={job.id}
                        >
                            <img
                                src={`../src/assets/images/${job.image}`}
                                alt=""
                                className="block"
                            />

                            <div className="card-body">
                                <h1 className="card-title">{job.name}</h1>

                                <section className="card-desc">
                                    <p>{job.description}</p>
                                </section>

                                <footer className="card-footer">
                                    <ul>
                                        {job.tools.map((tool, index) => (
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
