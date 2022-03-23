import { SIGN_IN, SIGN_OUT, GET_USER } from '../constants';

let initialState = {
  isLogin: false,
  user: {},
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      state = {
        ...state,
        isLogin: action.isLogin,
      }
      break;
    case SIGN_OUT:
      state = {
        ...state,
        user: action.user,
        isLogin: action.isLogin,
      }
      break;
    case GET_USER:
      //console.log(action.user);
      state = {
        ...state,
        user: action.user
      }
      break;
  }

  return state;
};

export default countReducer;