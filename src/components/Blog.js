import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="my-4 py-2 px-4 text-lg font-bold text-blue-900 bg-blue-50">
      <p>
        <Link to={blog.id}>
          {blog.title} {blog.author}
        </Link>
      </p>
    </div>
  );
};

export default Blog;
