import React, {Component} from 'react';
import { StyleSheet, Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'None' });
  }
  render() {
    return (
      <View style={styles.container}>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
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