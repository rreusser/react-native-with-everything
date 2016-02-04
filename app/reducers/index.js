'use strict'

import combineReducers from 'app/store/combine-reducers'
import app from './app'
import remote from './remote'

export default combineReducers({
  app: app,
  remote: remote,
})
