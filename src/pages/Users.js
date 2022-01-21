import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="mt-16 text-blue-900">
      <h2 className="text-3xl font-bold mb-8">Users</h2>
      <div>
        <h3 className="font-bold mb-4">Blogs created</h3>
        {users.map((user) => (
          <div className="flex space-x-4 my-2" key={user.id}>
            <Link className="text-blue-500 hover:text-blue-900" to={user.id}>
              {user.name}
            </Link>
            <p className="font-bold">{user.blogs.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
