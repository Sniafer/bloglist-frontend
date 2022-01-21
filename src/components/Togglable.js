import { useState } from "react";

const Togglable = ({ buttonLabel, cancelLabel, children }) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className="mb-8">
      <div
        style={hideWhenVisible}
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 max-w-fit py-2 rounded text-xl"
      >
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-4 max-w-fit py-2 rounded mt-4 text-xl"
          onClick={toggleVisibility}
        >
          {cancelLabel}
        </button>
      </div>
    </div>
  );
};

export default Togglable;
