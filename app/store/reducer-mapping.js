'use strict'

export default function reducerMapping (initialState, actionsMap) {
  return (state = initialState, action) => {
    if (!state) {
      return initialState
    }
    const reduceFn = actionsMap[action.type]
    if (!reduceFn) {
      return state
    }

    return reduceFn(state, action)
  }
}
