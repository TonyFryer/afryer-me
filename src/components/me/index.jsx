import aboutMeData from "../../data/profile.json";

const AboutMe = () => (
  <div className="card card-body mb-2">
    {aboutMeData.map((item, i) => (
      <p key={i}>{item}</p>
    ))}
  </div>
);

export default AboutMe;
