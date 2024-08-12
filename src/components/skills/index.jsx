import skillsData from "../../data/skills.json";

const SkillItem = ({ title, items }) => (
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <ul className="list-unstyled">
      {items &&
        items.map((item, bi) => {
          return (
            <li key={bi} className="mb-2">
              <div className="resume-skill-name">{item.name}</div>
              <div className="progress resume-progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: `${item.value}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
          );
        })}
    </ul>
  </div>
);

const OtherSkills = ({ items }) => (
  <div className="card-body">
    <h5 className="card-title">Others</h5>
    <ul className="list-inline">
      {items &&
        items.map((itm, i) => {
          return (
            <li key={i} className="list-inline-item">
              <span
                className="badge rounded-pill bg-primary"
                style={{ color: "#fff", fontWeight: 100, padding: ".25em 1em" }}
              >
                {itm}
              </span>
            </li>
          );
        })}
    </ul>
  </div>
);

const Skills = () => (
  <div className="mb-2">
    <SkillItem title="Management" items={skillsData.management} />
    <SkillItem title="Frontend" items={skillsData.frontend} />
    <SkillItem title="Backend" items={skillsData.backend} />
    <OtherSkills items={skillsData.other} />
  </div>
);

export default Skills;
