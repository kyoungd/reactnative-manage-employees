import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children} 
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: 50,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 10,
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingLeft: 5
  }
});

export { Card }