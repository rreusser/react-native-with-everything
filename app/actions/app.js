'use strict'

import {
  APP_TAP_BUTTON
} from 'app/reducers/app'

export function tapButton () {
  return {
    type: APP_TAP_BUTTON,
    API_CALL: {
      url: 'http://localhost:3000/api/v1/data'
    }
  }
}
