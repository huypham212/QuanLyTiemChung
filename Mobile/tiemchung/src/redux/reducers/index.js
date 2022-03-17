import { SIGN_IN, SIGN_OUT } from '../constants';

let initialState = {
  isSignout: false
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      state = {
        ...state,
        isSignout: true
      }
      break;
    case 'SIGN_OUT':
      state = {
        ...state,
        isSignout: false
      }
      break;
  }

  return state;
};

export default countReducer;