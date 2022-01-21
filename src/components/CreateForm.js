import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../reducers/blogsReducer";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const AddNewBlog = async (event) => {
    event.preventDefault();
    const newBlog = {
      title,
      author,
      url,
    };
    dispatch(addBlog(newBlog));
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  const inputStyle = "ml-2 outline-blue-500 p-1 w-full bg-blue-50";
  const inputContainerStyle = "flex my-2";
  const inputTextStyle = "w-16";

  return (
    <div className="rounded shadow-lg p-2 max-w-md text-blue-900">
      <h3 className="text-lg font-bold mb-4">Add new blog</h3>
      <form className="flex flex-col" onSubmit={AddNewBlog}>
        <div className={inputContainerStyle}>
          <p className={inputTextStyle}>Title:</p>
          <input
            className={inputStyle}
            type="text"
            value={title}
            name="Password"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div className={inputContainerStyle}>
          <p className={inputTextStyle}>Author:</p>
          <input
            className={inputStyle}
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div className={inputContainerStyle}>
          <p className={inputTextStyle}>url:</p>
          <input
            className={inputStyle}
            type="text"
            value={url}
            name="URL"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold self-center text-white px-4 py-2 rounded max-w-fit"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
