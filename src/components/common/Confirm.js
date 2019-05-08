import React, {Component} from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native'
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({children, visible, onYes, onCancel}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={()=>{}}
    >
      <View style={styles.container}>
        <CardSection style={styles.CardSection}>
          <Text style={styles.text}>{children}</Text>
        </CardSection>
        <CardSection style={styles.CardSection}>
          <Button onPress={onYes}>Yes</Button>
          <Button onPress={onCancel}>Cancel</Button>
        </CardSection>
      </View>
    </Modal>
  )
};

export { Confirm }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSection: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
});
