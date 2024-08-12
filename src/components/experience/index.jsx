import experienceData from "../../data/experience";
import { Link } from "react-router-dom";

const Impacts = ({ impacts }) =>
  impacts.map((item, i) => <li key={i}>{item}</li>);

const Responsibilities = ({ responsibilities }) =>
  responsibilities.map((item, i) => <li key={i}>{item}</li>);

const ExperienceItem = ({
  companyName,
  title,
  location,
  years,
  reasonLeaving,
  impacts,
  responsibilities
}) => (
  <div className="card" style={{ border: "none" }}>
    <div className="card-block">
      <div className="row card-body">
        <div className="col">
          <h5 className="card-title">{companyName}</h5>
          <h6 className="card-subtitle text-muted">{title}</h6>{" "}
        </div>
        <div className="col">
          <p className="small text-right card-subtitle text-muted mb-2 d-none d-lg-block">
            {location}
          </p>
          <span
            className="float-right badge rounded-pill bg-primary list-inline-item"
            style={{ color: "#fff", fontWeight: 100, padding: ".25em 1em" }}
          >
            {years}
          </span>
        </div>
      </div>
      <div className="row card-body" style={{ paddingTop: 0 }}>
        <div className="col">
          <h6 className="mb-1">Impacts</h6>
          <ul>
            <Impacts {...{ impacts }} />
          </ul>
          <h6 className="mb-1">Responsibilities</h6>
          <ul>
            <Responsibilities {...{ responsibilities }} />
          </ul>
        </div>
      </div>
      <div className="row card-body" style={{ paddingTop: 0, marginLeft: '1em' }}>
        <small className="card-subtitle text-muted mb-2">{reasonLeaving}</small>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <div className="mb-2">
    {experienceData.map((item, i) => (
      <ExperienceItem key={i} {...item} />
    ))}
  </div>
);

export default Experience;
