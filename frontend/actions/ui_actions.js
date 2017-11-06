import * as APIUtil from '../util/api_util';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const getUsers = () => (dispatch) => {
  return APIUtil.getUsers()
    .then((users) => {
      return dispatch(receiveUsers(users));
    });
};
