import * as APIUtil from '../util/api_util';
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_INTERVAL = "RECEIVE_INTERVAL";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveUser = (intervals) => {
  return {
    type: RECEIVE_USER,
    intervals,
  };
};

export const receiveInterval = (interval) => {
  return {
    type: RECEIVE_INTERVAL,
    interval
  };
};

export const getUsers = () => (dispatch) => {
  return APIUtil.getUsers()
    .then((users) => {
      return dispatch(receiveUsers(users));
    });
};

export const getUser = (id) => (dispatch) => {
  return APIUtil.getUser(id)
    .then((intervals) => {
      return dispatch(receiveUser(intervals));
    });
};

export const getInterval = (userId, mappedId) => (dispatch) => {
  return APIUtil.getInterval(userId, mappedId)
    .then((interval) => {
      return dispatch(receiveInterval(interval));
    });
};
