import { SIGN_IN, SIGN_OUT, GET_USER, GET_VACCINE_CALENDAR } from '../constants';
import database from '@react-native-firebase/database';

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

export function getVaccineCalendar(uid) {
  return async function (dispatch, getState) {
    database().ref('/injectedRegitrations/' + uid).on('value', snapshot => {
      dispatch({
        type: GET_VACCINE_CALENDAR,
        vaccineCalendar: snapshot.val()
      })
    })
  }
}