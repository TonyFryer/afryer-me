import educationData from "../../data/education.json";

const EducationItem = ({ institution, certification }) => (
  <div className="card-body" style={{paddingBottom: 0}}>
    <h5 className="card-title">{institution}</h5>
    <h6 className="card-subtitle text-muted">{certification}</h6>
  </div>
);

const Education = () => (
  <div className="mb-2">
    {educationData.map((item, i) => (
      <EducationItem key={i} {...item} />
    ))}
  </div>
);

export default Education;
