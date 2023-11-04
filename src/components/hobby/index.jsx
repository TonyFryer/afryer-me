import hobbyData from "../../data/hobbies.json";

const HobbyItem = ({ hobby, text }) => (
  <div className="card-body">
    <h5 className="card-title">{hobby}</h5>
    <h6 className="card-subtitle text-muted">{text}</h6>
  </div>
);

const Hobbies = () => (
  <div className="mb-2">
    {hobbyData.map((item, i) => (
      <HobbyItem key={i} {...item} />
    ))}
  </div>
);

export default Hobbies;
