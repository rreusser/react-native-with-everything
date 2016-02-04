'use strict'

import { Platform } from 'react-native'
import deepAssign from 'deep-assign'
import queryString from 'query-string'

// Maybe someday this will work to get network requests to show up in the
// network requests tab in chrome, but for now it definitely does not:
// delete GLOBAL.XMLHttpRequest;

import origFetch from 'app/lib/fetch'

import instrumentedFetch from 'app/lib/instrumented-fetch'
var fetch = true ? instrumentedFetch : origFetch

export default store => next => action => {
  if (!action['API_CALL'] ) {
    return next(action);
  }

  //Send this action on
  var returnValue = next(action);

  //Do the api call async
  var state = store.getState();

  var apiCall = action['API_CALL'];
  var url = apiCall.url

  //Default options below, caller can override or add
  var options = deepAssign({}, {
    method: 'GET',
    headers: {
      'Accepts': 'application/json'
    },
  }, apiCall.options || {});

  //Method
  if (apiCall.method) {
    options.method = apiCall.method;
  }


  //Params/Body
  if (apiCall.data) {
    if (options.method === 'GET') {
      var qs = queryString.stringify(apiCall.data);
      if (qs) {
        url += '?' + qs;
      }
    } else {
      if (apiCall.dataType === 'json') {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(apiCall.data);
      } else {
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        options.body = queryString.stringify(apiCall.data);
      }
    }
  }

  // API caller can override this, default assumes root is a payload
  var getDataPayloads;
  if (apiCall.getDataPayloads) {
    getDataPayloads = apiCall.getDataPayloads;
  } else {
    getDataPayloads = (json) => [json];
  }

  // Finally, run the api call
  fetch(url, options).then((response,b,c) => {
    return response.json().then(json => {
      return {json: json, response: response};
    }, error => {
      return {json: {body: response._bodyInit}, response: response }
    });
  })
  .then(result => {
    if (result.response.status < 300 || result.response.ok) {
      if (apiCall.success) {
        return apiCall.success(result.json, result.response);
      }
    } else {
      if (apiCall.error) {
        return apiCall.error(result.response.status, result.json, result.reponse);
      }
    }
  })
  .catch(error => {
    var result
    if (apiCall.error) {
      result = apiCall.error(null, null, error);
    }
    if (true) {
      throw error
    }
    return result
  })
  .done();

  return returnValue;
};
