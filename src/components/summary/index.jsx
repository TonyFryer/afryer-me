import summaryData from "../../data/about.json";

const Summary = () => (
  <>
    <div className="card card-body mb-2">{summaryData.about}</div>
    <div className="card card-body mb-2" style={{backgroundColor: '#abf9ec'}}>{summaryData.about2}</div>
  </>
);

export default Summary;
