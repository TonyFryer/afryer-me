import { Helmet } from "react-helmet";
import BlogPost from "../components/blog-post";

const BlogPostPage = () => (
  <>
    <Helmet>
      <title>Blog | Anthony Fryer</title>
      <meta
        name="description"
        content="Learn more about my interests and beliefs here."
      />
    </Helmet>
    <BlogPost />
  </>
);

export default BlogPostPage;
