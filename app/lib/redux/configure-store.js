import thunk from 'redux-thunk'

import {
  createStore,
  applyMiddleware
} from 'redux'

import reducers from 'app/reducers'

export default function configureStore () {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  return createStoreWithMiddleware(reducers, reducers())
}
