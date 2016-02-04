'use strict';

import React from 'react-native';
import { connect } from 'react-redux';
import NameOfPlatform from 'app/components/name-of-platform'
import Button from 'app/components/button'
import styles from './styles'

var {
  View,
  Text,
  TouchableOpacity
} = React

import {incrementCounter} from 'app/actions/app'
import {remoteFetch} from 'app/actions/remote'

class Helpfinder extends React.Component {
  constructor(props) {
    super(props);
  }

  incrementCounter = () => {
    this.props.dispatch(incrementCounter())
  };

  fetchSomething = () => {
    this.props.dispatch(remoteFetch())
  };

  render() {
    return (
      <View>
        <View style={styles.section}>
          <NameOfPlatform/>
        </View>

        <View style={styles.section}>
          <Text>Counter: {this.props.counter}</Text>
          <Button onPress={this.incrementCounter} label="Increment" style={styles.btn}/>
        </View>

        <View style={styles.section}>
          <Button onPress={this.fetchSomething} label="Fetch something from the server" style={styles.btn}/>
          {this.props.fetching ? (
            <Text>Fetching...</Text>
          ) : (
            <Text>Server says: {!!this.props.fetchedContent ? ('"' + this.props.fetchedContent + '"') : '<no response>'}</Text>
          )}
        </View>
      </View>
    );
  }
}

export default connect(state => {
  return {
    counter: state.getIn(['app', 'counter']),
    fetching: state.getIn(['remote', 'fetching']),
    fetchedContent: state.getIn(['remote', 'fetchedContent'])
  }
})(Helpfinder);
