import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVote, removeBlog } from "../reducers/blogsReducer";

const Blog = ({ blog, user }) => {
  const [visible, setVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    user.username === blog.user.username
      ? setDeleteVisible(true)
      : setDeleteVisible(false);
  }, [user.username, blog.user.username]);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const handleLike = (blog) => {
    dispatch(addVote(blog));
  };

  const handleDelete = (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      dispatch(removeBlog(blog));
    }
  };
  return (
    <div style={blogStyle}>
      <p>
        {blog.title} {blog.author}
        <button onClick={toggleVisibility}>{visible ? "hide" : "view"}</button>
      </p>
      <div style={{ display: visible ? "" : "none" }}>
        <p>{blog.url}</p>
        <p>
          {blog.likes}
          <button onClick={() => handleLike(blog)}>Like</button>
        </p>
        <p>{blog.user.name} </p>
        {deleteVisible && (
          <button onClick={() => handleDelete(blog)}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default Blog;
