'use strict'

import {
  REMOTE_FETCH,
  REMOTE_FETCH_COMPLETE,
  REMOTE_FETCH_FAILED,
} from 'app/reducers/remote'

export function remoteFetch () {
  return dispatch => {
    dispatch({
      type: REMOTE_FETCH,
      API_CALL: {
        url: 'http://localhost:3000/api/v1/data',
        success: (response) => {
          dispatch({
            type: REMOTE_FETCH_COMPLETE,
            content: response.content
          })
        },
        error: () => {
          dispatch({type: REMOTE_FETCH_FAILED})
        }
      }
    })
  }
}
