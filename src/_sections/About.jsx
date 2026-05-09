import "../styles/About.styles.css";
import { frontendSkills, backendSkills } from "../../_constants/about";


export default function About() {
  return (
    <section className="about-section" id="section-about">
      <div className="about-panel">
        <div className="about-content">
          <h2 className="about-title">
            About <span>me</span>
          </h2>

          <p className="about-description">
            Fullstack developer passionate about creating modern and scalable web solutions. I work with cutting-edge technologies and have an eye for good design.
          </p>

          <div className="about-stack-group">
            <h3>FRONTEND</h3>
            <div className="about-badges">
              {frontendSkills.map((skill) => (
                <span key={skill} className="about-badge about-badge-frontend">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="about-stack-group">
            <h3>BACKEND</h3>
            <div className="about-badges">
              {backendSkills.map((skill) => (
                <span key={skill} className="about-badge about-badge-backend">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}