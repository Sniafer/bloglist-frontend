import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
  const id = useParams().id;
  const users = useSelector((state) => state.users);
  const user = users.find((u) => u.id === id);
  return (
    <div>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <h3>added blogs</h3>
          {user.blogs.map((blog) => (
            <ul key={blog.id}>
              <li>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
