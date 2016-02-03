'use strict'

export default function reducerMapping (initialState, actionsMap) {
  return (state = initialState, action) => {
    if (!action) {
      return state
    }
    const reduceFn = actionsMap[action.type]
    if (!reduceFn) {
      return state
    }

    return state
  }
}
