import React, { Component } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from 'app/store/configure-store'
import Helpfinder from 'app/containers/helpfinder'

var store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Helpfinder/>
      </Provider>
    )
  }
}
