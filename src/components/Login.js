const Login = ({
  username,
  password,
  handleLogin,
  handleUsername,
  handlePassword,
}) => {
  return (
    <div>
      <h3>Log in to application</h3>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={handleUsername}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={handlePassword}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
