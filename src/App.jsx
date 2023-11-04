import "./assets/app-theme.css";
import "./assets/app-styles.css";
import "./assets/app-styles-mobile.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/layout";

const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollHandler />
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
);

export default App;
