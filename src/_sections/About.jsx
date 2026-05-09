import "../styles/About.styles.css";
import { skills } from "../../_constants/about";

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

          <div className="about-skills-grid" id="section-skills">
            {skills.map((group) => {
              const title = Array.isArray(group.skills.title)
                ? group.skills.title[0]
                : group.skills.title;
              const isFrontend = title?.toLowerCase() === "frontend";

              return (
                <div key={title} className="about-skill-group">
                  <h3>{title}</h3>
                  <div className="about-skill-tags">
                    {group.skills.skills.map((item) => (
                      <span
                        key={item.name}
                        className={`about-skill-tag ${isFrontend ? "is-frontend" : "is-neutral"}`}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> 
    </section>
  );
}