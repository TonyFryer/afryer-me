import { Helmet } from "react-helmet";
import Awards from "../components/award";

const AwardsPage = () => (
  <>
    <Helmet>
      <title>Awards | Anthony Fryer</title>
      <meta
        name="description"
        content="Learn more about awards I have won here."
      />
    </Helmet>
    <Awards />
  </>
);

export default AwardsPage;
