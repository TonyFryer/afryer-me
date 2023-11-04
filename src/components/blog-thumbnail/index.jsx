import blogData from "../../data/articles-content.json";
import { Link } from "react-router-dom";

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

const BlogThumbnail = () => (
  <>
    <div className="card card-body mb-2">{blogData.summary}</div>
    {blogData.articles &&
      blogData.articles.map((item, i) => {
        return (
          <div key={i} className="card" style={{ marginBottom: ".5em" }}>
            <div className="card-body">
              <h4 className="card-title">
                <Link className="blogNav" to={`/blog/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p className="card-text">{item.abstract}</p>
              <BlogCategoryItem categories={item.categories} />
            </div>
          </div>
        );
      })}
  </>
);

export default BlogThumbnail;
