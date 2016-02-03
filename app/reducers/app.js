'use strict'

import { Map } from 'immutable'
import reducerMapping from 'app/store/reducer-mapping'

export const APP_TAP_BUTTON = 'APP_TAP_BUTTON'

var initialState = Map({
  foo: 'bar'
})

var map = {}

map[APP_TAP_BUTTON] = (state, action) => {
  return state.set('foo', 'bop')
}

export default reducerMapping(initialState, map)
