import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";
import { addBlog } from "../reducers/blogsReducer";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const AddNewBlog = async (event) => {
    event.preventDefault();

    try {
      const newBlog = {
        title,
        author,
        url,
      };
      dispatch(addBlog(newBlog));
      setTitle("");
      setAuthor("");
      setUrl("");
      dispatch(
        setNotification(
          `a new blog ${newBlog.title} by ${newBlog.author} added`,
          5
        )
      );
    } catch (exception) {
      dispatch(setNotification(`Please fill author and url fields`, 5, true));
    }
  };

  return (
    <div>
      <h3>Add new blog</h3>
      <form onSubmit={AddNewBlog}>
        <div>
          Title:
          <input
            type="text"
            value={title}
            name="Password"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author:
          <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={url}
            name="URL"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateForm;
