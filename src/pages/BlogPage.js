import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addVote, removeBlog } from "../reducers/blogsReducer";
import { useEffect } from "react";
import { removeComments, showComments } from "../reducers/commentsReducer";

const BlogPage = () => {
  const id = useParams().id;
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((b) => b.id === id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (blog) {
      dispatch(showComments(blog.id));
    }
    return () => {
      dispatch(removeComments());
    };
  }, [blog, dispatch]);

  const comments = useSelector((state) => state.comments);
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  const handleLike = (blog) => {
    dispatch(addVote(blog));
  };

  const handleDelete = (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      dispatch(removeBlog(blog));
      navigate("/");
    }
  };
  return (
    <div>
      {blog && (
        <div>
          <h2>
            {blog.title} {blog.author}
          </h2>
          <a href={blog.url}>{blog.url}</a>
          <p>
            {blog.likes}
            <button onClick={() => handleLike(blog)}>Like</button>
          </p>
          <p>Added by {blog.user.name}</p>
          {user.username === blog.user.username && (
            <button onClick={() => handleDelete(blog)}>Remove</button>
          )}
          {comments && (
            <div>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>
                    {comment.text} by {comment.user.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
