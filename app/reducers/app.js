'use strict'

import { Map } from 'immutable'
import reducerMapping from 'app/lib/redux/reducer-mapping'

var initialState = Map({
  foo: 'bar'
})

var map = {}

map['SOMETHING'] = (state, action) => ({
  foo: 'bop'
})

export default reducerMapping(initialState, map)

