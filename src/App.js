import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Notification from "./components/Notification";
import { initializeBlogs } from "./reducers/blogsReducer";
import { checkLogin, loginUser, logoutUser } from "./reducers/userReducer";
import Blogs from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import { initializeUsers } from "./reducers/usersReducer";
import User from "./pages/User";
import BlogPage from "./pages/BlogPage";
import Nav from "./components/Nav";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.user);

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginUser(username, password));
    setUsername("");
    setPassword("");
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

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
          <Nav />
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/:id" element={<BlogPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
