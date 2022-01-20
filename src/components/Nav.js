import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">blogs</Link>
      <Link to="/users">users</Link>
    </nav>
  );
};

export default Nav;
