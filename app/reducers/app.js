'use strict'

import { Map } from 'immutable'
import reducerMapping from 'app/store/reducer-mapping'

export const APP_INCREMENT_COUNTER = 'APP_INCREMENT_COUNTER'

var initialState = Map({
  counter: 0
})

var map = {}

map[APP_INCREMENT_COUNTER] = (state, action) => {
  return state.set('counter', state.get('counter') + 1)
}

export default reducerMapping(initialState, map)
