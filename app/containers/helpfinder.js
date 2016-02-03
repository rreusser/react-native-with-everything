'use strict';

import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var {
  View,
  Text,
  TouchableOpacity
} = React

class Helpfinder extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    console.log('hit')
  };

  render() {
    const { state, actions } = this.props;
    return (
      <View style={{paddingTop: 100}}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators({}, dispatch)
  })
)(Helpfinder);
