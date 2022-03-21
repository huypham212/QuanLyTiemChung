import { SIGN_IN, SIGN_OUT } from '../constants';

export function signIn() {
  return {
    type: 'SIGN_IN',
    value: true
  }
}

export function signnOut() {
  return {
    type: 'SIGN_OUT',
    value: false
  }
}

export function getUser(userId) {
  return {
    type: 'GET_USER',
    value: () => {
      database().ref('/users/' + userId).on('value', snapshot => {
        return snapshot.val();
      })
    }
  }
}