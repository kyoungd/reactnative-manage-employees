/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/components/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyBY4woT1OgBKxi7RbyUISxAtUAoJFzSse8',
      authDomain: 'manager-5eaed.firebaseapp.com',
      databaseURL: 'https://manager-5eaed.firebaseio.com',
      projectId: 'manager-5eaed',
      storageBucket: 'manager-5eaed.appspot.com',
      messagingSenderId: '897692262194'
    };
    firebase.initializeApp(config);    
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
