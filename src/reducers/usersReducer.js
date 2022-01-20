import usersServices from "../services/users";

const actions = {
  init: "INIT_USERS",
};

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await usersServices.getAll();
    dispatch({
      type: actions.init,
      data: users,
    });
  };
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case actions.init:
      return action.data;
    default:
      return state;
  }
};

export default usersReducer;
