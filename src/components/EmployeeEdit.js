import _ from 'lodash';
import React, {Component} from 'react';
import { StyleSheet, Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button, Card, CardSection, Input, Spinner, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }
  
  componentWillMount(){
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    })
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }
  onTextPress() {
    const { name, phone, shift } = this.props;
    const message = `${name}. Your upcoming work schedule is on ${shift}.`;
    Communications.text(phone, message);
  }
  onCancel() {
    this.setState({showModal: false});
  }
  onEmployeeDelete() {
    const {uid} = this.props.employee;
    this.props.employeeDelete(uid);
  }
  render() {
    return (
      <View style={styles.container}>
        <EmployeeForm {...this.props} />
        <Text>SHOW-MODAL: {this.state.showModal}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm 
          visible={ this.state.showModal }
          onYes={this.onEmployeeDelete.bind(this)}
          onCancel={ this.onCancel.bind(this) }
        >
          Are you sure you want to delete this?
        </Confirm>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift }
}

export default connect(mapStateToProps, actions)(EmployeeEdit);

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