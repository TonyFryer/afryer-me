import summaryData from "../../data/about.json";

const Summary = () => (
  <div className="card card-body mb-2">{summaryData.about}</div>
);

export default Summary;
