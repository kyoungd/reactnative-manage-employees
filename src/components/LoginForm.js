import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPassowrdChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    this.props.loginUser(this.props.email, this.props.password)
  }

  renderButton() {
    return (this.props.loading ? <Spinner /> : <Button onPress={this.onButtonPress.bind(this)}>Login</Button>);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder = 'user@gmail.com'
            autocorrect = {false}
            label = 'email'
            onChangeText = { this.onEmailChange.bind(this) }
            value = {this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry = {true}
            placeholder = 'password'
            autocorrect = {false}
            label = 'password'
            onChangeText = { this.onPassowrdChange.bind(this) }
            value = {this.props.password}
          />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <Text style={styles.error}>{ this.props.error } </Text>
      </Card>
    )
  }
}

const mapStateToProps = (state, myProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    user: state.auth.user,
    loading: state.auth.loading,
  }
}

export default connect(mapStateToProps, actions )(LoginForm)

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
});

/*

*/