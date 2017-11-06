import { RECEIVE_USERS } from '../actions/ui_actions';
import merge from 'lodash/merge';


const initialState = {
  users: []
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
    default:
      return state;
  }
};

export default uiReducer;
