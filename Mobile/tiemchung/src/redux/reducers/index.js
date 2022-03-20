import { SIGN_IN, SIGN_OUT, GET_USER, GET_VACCINE_CALENDAR } from '../constants';

let initialState = {
  isLogin: false,
  user: {},
  vaccineCalendar: []
};

const getUser = () => {
  //const [userData, setUserData] = useState({});
  const userData = database().ref('/users/' + auth().currentUser.uid).once('value');
  const snapshot = userData.then(snapshot => snapshot.val())
  console.log(snapshot);
}

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
    case GET_VACCINE_CALENDAR:
      state = {
        ...state,
        vaccineCalendar: action.vaccineCalendar
      }
  }

  return state;
};

export default countReducer;