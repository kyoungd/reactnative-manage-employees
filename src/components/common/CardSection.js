import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      { props.children} 
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export { CardSection }
