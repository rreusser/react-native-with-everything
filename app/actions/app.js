'use strict'

import {
  APP_INCREMENT_COUNTER,
} from 'app/reducers/app'

export function incrementCounter () {
  return {
    type: APP_INCREMENT_COUNTER
  }
}

