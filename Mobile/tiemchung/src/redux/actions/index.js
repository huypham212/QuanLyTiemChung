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