import _ from 'lodash';
import React, {Component} from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
	}
	renderItem(employee) {
		return <ListItem employee={employee} />;
	}
	render() {
		return (
			<FlatList
				data={this.props.employees}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(employee, index) => index.toString()}
			/>
		);
	}
}
 
const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
 
    return { employees }
};
 
export default connect(mapStateToProps, actions)(EmployeeList);
