import firebase from 'firebase';
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE} from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  return(dispatch) => {
    const { currentUser } = firebase.auth();    // get current authorized user.
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.employeeList({type: 'reset'})
      });   // type: reset, it resets the call stack.  will remove the back button.
  }
  // return {
  //   type: EMPLOYEE_CREATE,
  //   payload: { name, phone, shift }
  // }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  return(dispatch) => {
    const { currentUser } = firebase.auth();    // get current authorized user.
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.employeeList({type: 'reset'})
      });   // type: reset, it resets the call stack.  will remove the back button.
  }
  // return {
  //   type: EMPLOYEE_CREATE,
  //   payload: { name, phone, shift }
  // }
}

export const employeesFetch = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();    // get current authorized user.
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {                // Automatic data update.  the .on('value', ) is persistent.
        dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
      });
  }
}

export const employeeDelete = uid => {
  return(dispatch) => {
    const { currentUser } = firebase.auth();    // get current authorized user.
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      dispatch({type: EMPLOYEE_CREATE});
      Actions.employeeList({type: 'reset'})
  })
  }
}