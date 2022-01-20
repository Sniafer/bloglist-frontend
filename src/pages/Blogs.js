import { useSelector } from "react-redux";
import Blog from "../components/Blog";
import CreateForm from "../components/CreateForm";
import Togglable from "../components/Togglable";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);

  const sortedBlogs = blogs.sort((a, b) => {
    return b.likes - a.likes;
  });
  return (
    <div>
      <h2>Blogs</h2>
      <Togglable buttonLabel={"Create new blog"} cancelLabel={"Cancel"}>
        <CreateForm />
      </Togglable>
      {sortedBlogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
