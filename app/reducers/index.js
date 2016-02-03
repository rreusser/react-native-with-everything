'use strict'

import combineReducers from 'app/lib/redux/combine-reducers'
import app from './app'

export default combineReducers({
  app: app,
})
