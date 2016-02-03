'use strict'

var groupDepth = 0;

var hfConsole = {

  present: function() {
    return !!window && !!window.console && !!window.console.groupCollapsed
    //return !!window && !!window.console
  },

  error: function(...args) {
    if( hfConsole.present() && window.console.error ) {
      window.console.error(...args)
    } else {
      if( groupDepth===0 ) window.console.error(...args)
    }
  },

  log: function(...args) {
    if( hfConsole.present() && window.console.log ) {
      window.console.log(...args)
    } else {
      if( groupDepth===0 ) window.console.log(...args)
    }
  },

  warn: function(...args) {
    if( hfConsole.present() && window.console.warn ) {
      window.console.warn(...args)
    } else {
      if( groupDepth===0 ) window.console.warn(...args)
    }
  },

  info: function(...args) {
    if( hfConsole.present() && window.console.info ) {
      window.console.info(...args)
    } else {
      if( groupDepth===0 ) window.console.info(...args)
    }
  },

  group: function(...args) {
    if( hfConsole.present() && window.console.group ) {
      window.console.group(...args)
    } else if( groupDepth===0 ) {
      hfConsole.log(...args)
    }
    groupDepth++
  },

  groupCollapsed: function(...args) {
    if( hfConsole.present() && window.console.groupCollapsed ) {
      window.console.groupCollapsed(...args)
    } else if( groupDepth===0 ) {
      hfConsole.log(...args)
    }
    groupDepth++
  },

  groupEnd: function(...args) {
    groupDepth--;
    if( hfConsole.present() && window.console.groupEnd ) {
      window.console.groupEnd(...args)
    }
  }

}

export default hfConsole
