import { SIGN_IN, SIGN_OUT, GET_USER, GET_VACCINE_CALENDAR, GET_VACCINES, POST_VACCINE_CALENDAR, GET_INJECTED_LOCATIONS } from '../constants';

let initialState = {
  isLogin: false,
  user: {},
  vaccines: {},
  vaccineCalendar: {},
  injectedLocations: {},
  injectedInfo: {}
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
      state = {
        ...state,
        user: action.user
      }
      break;
    case GET_VACCINES:
      state = {
        ...state,
        vaccines: action.vaccines
      }
      break;
    case GET_VACCINE_CALENDAR:
      state = {
        ...state,
        vaccineCalendar: action.vaccineCalendar
      }
      break;
    case GET_INJECTED_LOCATIONS:
      state = {
        ...state,
        injectedLocations: action.injectedLocations
      }
      break;
    case POST_VACCINE_CALENDAR:
      state = {
        ...state,
        injectedInfo: action.injectedInfo
      }
      break;
  }

  return state;
};

export default countReducer;