'use strict'

import { Platform } from 'react-native'
import hfConsole from './hf-console'

// A counter so we can number the requests in case things are out of order:
var c=0

// Run-time override for disabling xhr logging:
window.logXHR = true

// A copy of the function we'll be instrumenting:
import origFetch from 'app/lib/fetch'

export default function instrumentedFetch(...args) {
  c++
  var i = c
  if( window.logXHR ) {

    hfConsole.groupCollapsed('%c Begin '+(args.length > 0 && args[1] ? args[1].method : 'GET')+'(#'+i+'): '+args[0], 'background: #ee8;')
    hfConsole.info('Raw:', args.length > 0 ? args[1] : null);
    hfConsole.groupEnd();

    return origFetch(...args).then((result) => {
      if(result.status < 300 || result.ok) {
        hfConsole.groupCollapsed('%c Resolve XHR(#'+i+'): ' + args[0], 'background: #cec;')
        hfConsole.info('Status:',result.status)
        if( result._bodyInit && result._bodyInit.length > 0 ) {
          hfConsole.info('Parsed Content:',JSON.parse(result._bodyInit))
        }
        hfConsole.info('Headers:',result.headers)
        hfConsole.info('Raw:',result)
        hfConsole.groupEnd();
      } else {
        hfConsole.groupCollapsed('%c Failed XHR(#'+i+'): ' + args[0], 'background: #ecc;')
        hfConsole.info('Status:',result.status)
        hfConsole.info('Raw:',result)
        hfConsole.groupEnd();
      }
      return result
    },(result) => {
      hfConsole.info('%c Failed XHR: ' + args[0], 'background: #ecc;')
    })
  } else {
    return origFetch(...args)
  }
}
