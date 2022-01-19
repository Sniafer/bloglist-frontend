import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setNotification } from "./reducers/notificationReducer";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import login from "./services/login";
import Login from "./components/Login";
import CreateForm from "./components/CreateForm";
import Togglable from "./components/Togglable";
import Notification from "./components/Notification";
import { initializeBlogs } from "./reducers/blogsReducer";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await login({
        username,
        password,
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      dispatch(setNotification(`Wrong credentials`, 5, true));
    }
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const sortedBlogs = blogs.sort((a, b) => {
    return b.likes - a.likes;
  });

  return (
    <div>
      <Notification />
      {user === null ? (
        <Login
          username={username}
          password={password}
          handleLogin={handleLogin}
          handleUsername={({ target }) => setUsername(target.value)}
          handlePassword={({ target }) => setPassword(target.value)}
        />
      ) : (
        <div>
          <p>
            {user.name} logged-in
            <button onClick={handleLogOut}>Log out</button>
          </p>
          <Togglable buttonLabel={"Create new blog"} cancelLabel={"Cancel"}>
            <CreateForm />
          </Togglable>
          <h2>blogs</h2>
          {sortedBlogs.map((blog) => (
            <Blog blogs={blogs} key={blog.id} blog={blog} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
