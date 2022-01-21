const Login = ({
  username,
  password,
  handleLogin,
  handleUsername,
  handlePassword,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto my-12 bg-white rounded-xl shadow-xl flex items-center space-x-4">
      <h3 className="text-3xl text-blue-900">Log in to application</h3>
      <form onSubmit={handleLogin}>
        <div className="text-slate-700">
          Username:
          <input
            className="bg-blue-50 my-2 outline-blue-500 text-blue-900"
            type="text"
            value={username}
            name="Username"
            onChange={handleUsername}
          />
        </div>
        <div className="text-slate-700">
          Password:
          <input
            className="bg-blue-50 my-2 mb-4 outline-blue-500 text-blue-900"
            type="password"
            value={password}
            name="Password"
            onChange={handlePassword}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold text-white px-4 py-2 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
