import { useSelector } from "react-redux";

const message =
  "w-full py-4 px-2 text-green-900 bg-green-400 text-lg font-bold";

const error = "w-full py-4 px-2 text-red-900 bg-red-400 text-lg font-bold";

const Notification = () => {
  const notification = useSelector((state) => state.notification.notification);
  return (
    <div className="absolute top-0 left-0 w-full text-center">
      {notification.message && (
        <div className={notification.error ? error : message}>
          <p>{notification.message}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
