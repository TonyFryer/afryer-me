import { Helmet } from "react-helmet";
import BlogThumbnail from "../components/blog-thumbnail";

const BlogPage = () => (
  <>
    <Helmet>
      <title>Blog | Anthony Fryer</title>
      <meta
        name="description"
        content="Learn more about my interests and beliefs here."
      />
    </Helmet>
    <BlogThumbnail />
  </>
);

export default BlogPage;
