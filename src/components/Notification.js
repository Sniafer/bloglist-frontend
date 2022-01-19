import { useSelector } from "react-redux";

const message = {
  border: "1px solid black",
  backgroundColor: "#BAFFB4",
  width: "100%",
};

const error = {
  border: "1px solid black",
  backgroundColor: "#FF7272",
  width: "100%",
};

const Notification = () => {
  const notification = useSelector((state) => state.notification.notification);
  return (
    <div>
      {notification.message && (
        <div style={notification.error ? error : message}>
          <p>{notification.message}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
