import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle}>
      <p>
        <Link to={blog.id}>
          {blog.title} {blog.author}
        </Link>
      </p>
    </div>
  );
};

export default Blog;
