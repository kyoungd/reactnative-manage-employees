import React, {Component} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinner}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>  )
}

export { Spinner }

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
