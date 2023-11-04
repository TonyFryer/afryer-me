import { Switch, Route } from "react-router";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import BlogPostPage from "./pages/blog-post";
import AwardsPage from "./pages/awards";
import AboutMePage from "./pages/about-me";

const NotFound = () => (
  <div className="text-center">
    Oops what you are looking for, does not exist.
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/blog" component={BlogPage} exact />
    <Route path="/blog/:id" component={BlogPostPage} exact />
    <Route path="/awards" component={AwardsPage} exact />
    <Route path="/about" component={AboutMePage} exact />
    <Route path="*" component={NotFound} exact />
  </Switch>
);

export default Router;
