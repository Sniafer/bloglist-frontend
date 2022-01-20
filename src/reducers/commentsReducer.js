import blogsServices from "../services/blogs";
import blogsService from "../services/blogs";

export const showComments = (blogId) => {
  return async (dispatch) => {
    const comments = await blogsService.getComments(blogId);
    dispatch({
      type: "INIT_COMMENTS",
      data: comments,
    });
  };
};

export const removeComments = () => {
  return {
    type: "REMOVE_COMMENTS",
    data: null,
  };
};

export const addComment = (text, blogId) => {
  return async (dispatch) => {
    const comment = await blogsServices.addComment({ text }, blogId);
    dispatch({
      type: "ADD_COMMENT",
      data: comment,
    });
  };
};

export const deleteComment = (blogId, comment) => {
  return async (dispatch) => {
    await blogsServices.deleteComment(blogId, comment.id);
    dispatch({
      type: "DELETE_COMMENT",
      data: comment,
    });
  };
};

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_COMMENTS":
      return action.data;
    case "REMOVE_COMMENTS":
      return action.data;
    case "ADD_COMMENT":
      return [...state, action.data];
    case "REMOVE_BLOG":
      return state.filter((comment) => comment.id !== action.data.id);
    default:
      return state;
  }
};

export default commentsReducer;
