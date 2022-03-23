import { SIGN_IN, SIGN_OUT } from '../constants';

export function signIn() {
  return async function (dispatch, getState) {
    dispatch({
      type: SIGN_IN,
      isLogin: true
    })
  }
}

export function signOut() {
  return async function (dispatch, getState) {
    dispatch({
      type: SIGN_OUT,
      user: {},
      isLogin: false
    })
  }
}

export function getUser(uid) {
  return async function (dispatch, getState) {
    database().ref('/users/' + uid).on('value', snapshot => {
      dispatch({
        type: GET_USER,
        user: snapshot.val()
      })
    })
  }
}