import blogsService from "../services/blogs";
import { setNotification } from "./notificationReducer";

export const addBlog = (blog) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogsService.create(blog);
      dispatch(
        setNotification(
          `a new blog ${newBlog.title} by ${newBlog.author} added`,
          5
        )
      );
      dispatch({ type: "ADD_BLOG", data: newBlog });
    } catch (exception) {
      dispatch(setNotification(`Please fill author and url fields`, 5, true));
    }
  };
};

export const addVote = (blog) => {
  return async (dispatch) => {
    const blogUpdate = { ...blog, likes: blog.likes + 1 };
    const updatedBlog = await blogsService.update(blogUpdate);
    dispatch({
      type: "VOTE",
      data: updatedBlog,
    });
  };
};

export const removeBlog = (blog) => {
  return async (dispatch) => {
    await blogsService.remove(blog.id);
    dispatch({
      type: "REMOVE_BLOG",
      data: blog,
    });
  };
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogsService.getAll();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs,
    });
  };
};

const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_BLOGS":
      return action.data;
    case "ADD_BLOG":
      return [...state, action.data];
    case "VOTE":
      const id = action.data.id;
      const findBlog = state.find((b) => b.id === id);
      const updatedBlog = { ...findBlog, likes: findBlog.likes + 1 };
      return state.map((blog) => (blog.id !== id ? blog : updatedBlog));
    case "REMOVE_BLOG":
      const removedBlogId = action.data.id;
      return state.filter((blog) => blog.id !== removedBlogId);
    default:
      return state;
  }
};

export default blogsReducer;
