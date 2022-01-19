const addNotification = (message, error) => {
  return {
    type: "ADD_NOTIFICATION",
    data: {
      message: message,
      error: error,
    },
  };
};

const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION",
    data: {
      message: "",
      error: null,
    },
  };
};

const clearNotification = (timout) => {
  return {
    type: "CLEAR_NOTIFICATION",
    data: timout,
  };
};

export const setNotification = (message, time, error = false) => {
  return async (dispatch) => {
    await dispatch(addNotification(message, error));
    const timeout = setTimeout(
      async () => await dispatch(removeNotification()),
      time * 1000
    );
    await dispatch(clearNotification(timeout));
  };
};

const notificationReducer = (
  state = { notification: "", timoutID: null },
  action
) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      if (state.timoutID) {
        clearTimeout(state.timoutID);
      }
      return {
        notification: action.data,
        timoutID: null,
      };
    case "REMOVE_NOTIFICATION":
      return {
        notification: action.data,
        timoutID: null,
      };
    case "CLEAR_NOTIFICATION":
      return {
        notification: state.notification,
        timoutID: action.data,
      };
    default:
      return state;
  }
};

export default notificationReducer;
