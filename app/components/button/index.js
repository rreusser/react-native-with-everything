'use strict'

import  React from 'react-native'
import styles from './styles'

var {
  View,
  Text,
  TouchableOpacity
} = React

export default class Button extends React.Component {
  render () {
    return (
      <TouchableOpacity {...this.props} style={[styles.btn, this.props.style]} >
        {this.props.label && <Text style={styles.btnText}>{this.props.label}</Text>}
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
