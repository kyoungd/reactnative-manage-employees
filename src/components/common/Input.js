import React, {Component} from 'react';
import { TouchableOpacity, TextInput, View, Text, StyleSheet } from 'react-native'

const Input = ({label, value, onChangeText, autocorrect=true, placeholder, secureTextEntry=false}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      secureTextEntry = {secureTextEntry}
      placeholder = { placeholder }
      autocorrect = { autocorrect }
      value = { value }
      onChangeText = { onChangeText }
      style={styles.textInput} 
    />
  </View>
)  

export { Input }

const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

});
