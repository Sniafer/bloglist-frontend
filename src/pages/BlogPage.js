import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addVote, removeBlog } from "../reducers/blogsReducer";
import { useEffect } from "react";
import {
  addComment,
  deleteComment,
  removeComments,
  showComments,
} from "../reducers/commentsReducer";

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

  const handleDeleteComment = (comment) => {
    if (window.confirm(`Remove comment ${comment.text}?`)) {
      dispatch(deleteComment(blog.id, comment));
    }
  };

  const submitComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment) {
      dispatch(addComment(comment, blog.id));
    }
    e.target.comment.value = "";
  };

  return (
    <div className="mt-16 text-blue-900">
      {blog && (
        <div>
          <h2 className="text-3xl font-bold mb-8">
            {blog.title} {blog.author}
          </h2>
          <a className="text-blue-500" href={blog.url}>
            {blog.url}
          </a>
          <p className="text-lg font-bold bg-blue-50 max-w-fit rounded py-2 px-2 my-4">
            {blog.likes}
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold text-white ml-4 px-4 py-1 rounded"
              onClick={() => handleLike(blog)}
            >
              Like
            </button>
          </p>
          <p className="my-4 text-sm">Added by {blog.user.name}</p>
          {user.username === blog.user.username && (
            <button
              className="bg-red-500 hover:bg-red-700 font-bold text-white px-4 py-2 rounded"
              onClick={() => handleDelete(blog)}
            >
              Remove Blog
            </button>
          )}
          <div>
            <h3 className="text-xl mt-8 mb-4">Add comment</h3>
            <form onSubmit={submitComment}>
              <input
                className="bg-blue-50 outline-blue-500 sm:mr-4 p-1 my-2"
                name="comment"
              />
              <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white px-4 py-1 rounded">
                Submit
              </button>
            </form>
          </div>
          {comments && (
            <div className="mt-8 ">
              <ul className="flex flex-col space-y-4">
                {comments.map((comment) => (
                  <li className="bg-blue-50 p-2" key={comment.id}>
                    <p className="text-lg">{comment.text}</p>
                    <p className="text-sm">by {comment.user.name}</p>
                    {user.username === comment.user.username && (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-sm font-bold text-white px-2 py-1 rounded"
                        onClick={() => handleDeleteComment(comment)}
                      >
                        Remove Comment
                      </button>
                    )}
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
