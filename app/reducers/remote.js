'use strict'

import { Map } from 'immutable'
import reducerMapping from 'app/store/reducer-mapping'

export const REMOTE_FETCH = 'REMOTE_FETCH'
export const REMOTE_FETCH_COMPLETE = 'REMOTE_FETCH_COMPLETE'
export const REMOTE_FETCH_FAILED = 'REMOTE_FETCH_FAILED'

var initialState = Map({
  fetching: false,
  fetchFailed: false,
  fetchedContent: null,
})

var map = {}

map[REMOTE_FETCH] = (state, action) => {
  return state.set('fetching', true)
              .set('fetchFailed', false)
              .set('fetchedContent', null)
}

map[REMOTE_FETCH_COMPLETE] = (state, action) => {
  return state.set('fetching', false)
              .set('fetchFailed', false)
              .set('fetchedContent', action.content)
}

map[REMOTE_FETCH_FAILED] = (state, action) => {
  return state.set('fetching', false)
              .set('fetchFailed', true)
}

export default reducerMapping(initialState, map)
