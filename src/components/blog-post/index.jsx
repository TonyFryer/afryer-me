import { useParams } from "react-router-dom";
import blogData from "../../data/articles-content.json";
import { Link } from "react-router-dom";

const BlogPostList = ({ content }) => (
  <ul>
    {content &&
      content.map((item, i) => {
        console.log(item);
        return (
          <li key={i} className="mb-2">
            {item}
          </li>
        );
      })}
  </ul>
);

const BlogPostSections = ({ type, content }) => {
  if (type === "paragraph") return <p className="card-text">{content}</p>;
  if (type === "h2") return <h5 className="card-title">{content}</h5>;
  if (type === "h3") return <h6 className="card-title">{content}</h6>;
  if (type === "list-items") return <BlogPostList {...{ content }} />;
  if (type === "image")
    return (
      <img
        style={{
          height: "auto",
          width: "75%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        src={content}
        alt="diagram"
      />
    );
  if (type === "quote")
    return (
      <div className="card text-white mb-3" style={{ borderColor: "#717171" }}>
        <div className="card-body" style={{ backgroundColor: "#717171" }}>
          <p className="card-text">{content}</p>
        </div>
      </div>
    );
};

const BlogCategoryItem = ({ categories }) =>
  categories.map((item, i) => (
    <span
      key={i}
      className="badge rounded-pill bg-primary list-inline-item"
      style={{ color: "#fff", fontWeight: 100, padding: ".25em 1em" }}
    >
      {item}
    </span>
  ));

const BlogPost = () => {
  const { id } = useParams();
  const blogPost =
    blogData &&
    blogData.articles &&
    blogData.articles.find((b) => {
      return b.id === parseInt(id, 0);
    });

  return (
    <div>
      <Link to="/blog" className="ml-2">
        « Return to Blog
      </Link>
      <div className="card mb-2">
        <div className="card-body">
          <h3 className="card-title">{blogPost.title}</h3>
          <h5 className="card-subtitle text-muted">{blogPost.subtitle}</h5>
          <BlogCategoryItem categories={blogPost.categories} />
          <div className="card-body">
            {blogPost.sections &&
              blogPost.sections.map((item, i) => {
                return <BlogPostSections key={i} {...item} />;
              })}
          </div>
        </div>
      </div>
      <Link to="/blog" className="ml-2">
        « Return to Blog
      </Link>
    </div>
  );
};

export default BlogPost;
