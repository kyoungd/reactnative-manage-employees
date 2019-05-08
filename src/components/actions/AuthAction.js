import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_START,
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

const loginUserSucessDispatch = (dispatch, user) => {
  dispatch({type: LOGIN_USER_SUCCESS, payload: user});
  Actions.main();
}

const loginUserFailedDispatch = (dispatch, err) => {
  dispatch({type: LOGIN_USER_FAILED, payload: err});
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    // loginUserSucessDispatch(dispatch, {email, id: 'AB12345678'});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user=> loginUserSucessDispatch(dispatch, user))
    .catch((error) => {
      console.log(error);   // wackiness with firebase.  if there was an error inside the action method, the firebase will catch that as an error here.
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user=> loginUserSucessDispatch(dispatch, user))
      .catch(err=> loginUserFailedDispatch(dispatch, "authentication failed"))
    });
    dispatch({type: LOGIN_USER_START, payload: true});
  }
}
