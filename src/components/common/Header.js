import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}

export { Header }

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2, 
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
});
