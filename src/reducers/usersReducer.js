import login from "../services/login";
import blogsService from "../services/blogs";
import { setNotification } from "./notificationReducer";

export const loginUser = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await login({
        username,
        password,
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogsService.setToken(user.token);
      dispatch({
        type: "LOGIN",
        data: user,
      });
    } catch (exception) {
      dispatch(setNotification(`Wrong credentials`, 5, true));
    }
  };
};

export const logoutUser = () => {
  window.localStorage.removeItem("loggedUser");
  return {
    type: "LOGOUT",
    data: null,
  };
};

export const checkLogin = () => {
  const loggedUserJSON = window.localStorage.getItem("loggedUser");
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    blogsService.setToken(user.token);
    return {
      type: "LOGIN",
      data: user,
    };
  }
};

const usersReducer = (state, action) => {};
