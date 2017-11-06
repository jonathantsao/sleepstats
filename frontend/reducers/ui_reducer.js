import { RECEIVE_USERS, RECEIVE_USER } from '../actions/ui_actions';
import merge from 'lodash/merge';


const initialState = {
  users: [],
  viewedUser: null,
  viewedUserIntervals: null,
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USERS:
      const allUsers = action.users["users"];
      newState = merge({}, state);
      newState.users = allUsers;
      return newState;
    case RECEIVE_USER:
      const intervals = action.intervals["intervals"];
      newState = merge({}, state);
      newState.viewedUser = action.intervals["user"];
      newState.viewedUserIntervals = intervals;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
