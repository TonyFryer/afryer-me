import { Helmet } from "react-helmet";
import Education from "../components/education";
import Hobbies from "../components/hobby";
import Summary from "../components/summary";
import Skills from "../components/skills";
import Experience from "../components/experience";

const HomePage = () => (
  <>
    <Helmet>
      <title>Resume | Anthony Fryer</title>
      <meta
        name="description"
        content="Learn more about my experiences and skills here."
      />
    </Helmet>
    <Summary />
    <div className="row">
      <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="card mb-2">
          <h3 className="card-header">Experience</h3>
          <Experience />
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
        <div className="card mb-2">
          <h3 className="card-header">Skills</h3>
          <Skills />
        </div>
        <div className="card mb-2">
          <h3 className="card-header">Education</h3>
          <Education />
        </div>
        <div className="card mb-2">
          <h3 className="card-header">Hobbies</h3>
          <Hobbies />
        </div>
      </div>
    </div>
  </>
);

export default HomePage;
