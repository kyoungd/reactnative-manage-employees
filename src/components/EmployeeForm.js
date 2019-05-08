import React, {Component} from 'react';
import { StyleSheet, Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input 
            label="Name" 
            placeholder="Jane" 
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
          />
        </CardSection>
        <CardSection>
          <Input 
            label="Phone" 
            placeholder="555-123-1234" 
            value={this.props.phone} 
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
          />
        </CardSection>
        <CardSection styles={{flexDirection: 'column'}}>
          <Text style={styles.pickerText}></Text>
          <Picker 
            style={styles.picker}
            selectedValue = { this.props.shift }
            onValueChange = { value => this.props.employeeUpdate({prop: 'shift', value}) }
          >
            <Picker.Item label="SHIFT" value="" />
            <Picker.Item label="Monday" value="Mon" />
            <Picker.Item label="Tuesday" value="Tue" />
            <Picker.Item label="Wednesday" value="Wed" />
            <Picker.Item label="Thursday" value="Thu" />
            <Picker.Item label="Friday" value="Fri" />
            <Picker.Item label="Saturday" value="Sat" />
            <Picker.Item label="Sunday" value="Sun" />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift }
}
export default connect(mapStateToProps, actions)(EmployeeCreate);

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
  },
  picker: {
    flex: 1
  },
  pickerText: {
    fontSize:18,
    paddingLeft: 10
  }
});