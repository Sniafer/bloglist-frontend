import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center text-blue-700 font-semibold text-lg">
      <Link className="hover:text-blue-900 mr-4 md:mr-8 " to="/">
        Blogs
      </Link>
      <Link className="hover:text-blue-900" to="/users">
        Users
      </Link>
    </nav>
  );
};

export default Nav;
