'use strict';

import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var {
  View,
  Text,
  TouchableOpacity
} = React

import {
  tapButton
} from 'app/actions/app'

class Helpfinder extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.dispatch(tapButton())
  };

  render() {
    return (
      <View style={{paddingTop: 100}}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>{this.props.foo}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(state => {
  return {
    foo: state.getIn(['app', 'foo'])
  }
})(Helpfinder);
