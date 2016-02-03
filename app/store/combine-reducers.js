'use strict'

import Immutable from 'immutable'
import getUnexpectedInvocationParameterMessage from './get-unexpected-invocation-parameter-message'
import validateNextState from './validate-next-state'

export default (reducers: Object) => {
  let reducerKeys

  reducerKeys = Object.keys(reducers)

  return (inputState, action) => {
    if (!inputState) {
      return Immutable.Map(reducers).withMutations(map => {
        for (let i = 0; i < reducerKeys.length; i++) {
          let key = reducerKeys[i]
          map.set(key, map.get(key)(null))
        }
      })
    }

    if (process.env.NODE_ENV !== 'production') {
      let warningMessage

      warningMessage = getUnexpectedInvocationParameterMessage(inputState, reducers, action)

      if (warningMessage) {
        /* eslint-disable no-console */
        console.error(warningMessage)
        /* eslint-enable no-console */
      }
    }

    return inputState
      .withMutations((temporaryState) => {
        for (let i = 0; i < reducerKeys.length; i++) {
          let key = reducerKeys[i]
          var currentDomainState, nextDomainState, reducer

          reducer = reducers[key]
          currentDomainState = temporaryState.get(key)
          nextDomainState = reducer(currentDomainState, action)
          validateNextState(nextDomainState, key, action)
          temporaryState.set(key, nextDomainState)
        }
      })
  }
}
