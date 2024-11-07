import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link className="logo royal-hover" to="/">
                dave
            </Link>
            <div className="menu">
                <ul>
                    <Link to="">
                        <li className="royal-hover">About</li>
                    </Link>
                    <Link to="">
                        <li className="royal-hover">Experience</li>
                    </Link>
                    <Link to="/projects">
                        <li className="royal-hover">Projects</li>
                    </Link>
                    <Link to="">
                        <li className="royal-hover">Contact</li>
                    </Link>
                </ul>
            </div>

            <Link className="resume royal-hover" to="">Resume</Link>
        </nav>
    );
}
