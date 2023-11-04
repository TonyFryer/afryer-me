import { Helmet } from "react-helmet";
import AboutMe from "../components/me";

const AboutMePage = () => (
  <>
    <Helmet>
      <title>About | Anthony Fryer</title>
      <meta name="description" content="Learn more about me here." />
    </Helmet>
    <AboutMe />
  </>
);

export default AboutMePage;
