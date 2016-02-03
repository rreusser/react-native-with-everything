'use strict'

import combineReducers from 'app/store/combine-reducers'
import app from './app'

export default combineReducers({
  app: app,
})
