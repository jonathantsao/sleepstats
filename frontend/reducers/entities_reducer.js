import { RECEIVE_INTERVAL } from '../actions/ui_actions';
import merge from 'lodash/merge';

const initialState = {
  interval: null,
};

const entitiesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_INTERVAL:
      const interval = action.interval;
      newState = merge({}, state);
      newState.interval = interval;
      return newState;
    default:
      return state;
  }
};

export default entitiesReducer;
