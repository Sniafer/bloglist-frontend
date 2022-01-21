import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
  const id = useParams().id;
  const users = useSelector((state) => state.users);
  const user = users.find((u) => u.id === id);
  return (
    <div className="mt-16 text-blue-900">
      {user && (
        <div>
          <h2 className="text-3xl font-bold mb-8">{user.name}</h2>
          <h3 className="font-bold text-lg my-4">Added blogs:</h3>
          {user.blogs.map((blog) => (
            <ul className="bg-blue-50 p-2 my-4" key={blog.id}>
              <li>
                <Link
                  className="text-blue-500 hover:text-blue-900"
                  to={`/${blog.id}`}
                >
                  {blog.title}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
