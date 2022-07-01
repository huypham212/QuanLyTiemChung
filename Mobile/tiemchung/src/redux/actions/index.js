import { SIGN_IN, SIGN_OUT, GET_USER, GET_VACCINE_CALENDAR, GET_VACCINES, GET_INJECTED_LOCATIONS, POST_VACCINE_CALENDAR } from '../constants';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

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
    database().ref('/injectedRegistrations/' + uid).on('value', snapshot => {
      dispatch({
        type: GET_VACCINE_CALENDAR,
        vaccineCalendar: snapshot.val()
      })
    })
  }
}

export function getInjectedLocations() {
  return async function (dispatch, getState) {
    database().ref('/injectedLocations').on('value', snapshot => {
      dispatch({
        type: GET_INJECTED_LOCATIONS,
        injectedLocations: snapshot.val()
      })
    })
  }
}

export function getVaccines() {
  return async function (dispatch, getState) {
    database().ref('/vaccines').on('value', snapshot => {
      dispatch({
        type: GET_VACCINES,
        vaccines: snapshot.val()
      })
    })
  }
}

export function postVaccineCalendar(info) {
  return async function (dispatch, getState) {
    dispatch({
      type: POST_VACCINE_CALENDAR,
      injectedInfo: info
    })
  }
}