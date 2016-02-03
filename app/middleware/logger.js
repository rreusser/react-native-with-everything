/**
 * A Redux middleware that logs actions
 * Basically just a copy of redux-logger
 */

import deepDiff from 'recursive-diff'

export default store => next => action => {

  var prevState = store.getState();
  var prevStateJS = prevState.toJS()

  var time = new Date();
  var noGroup = false;

  if (typeof console !== 'undefined') {
    var message = 'action ' + action.type + ' @ ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ':' + time.getMilliseconds();

    try {
      //console.group(message);
      console.groupCollapsed(message);
      console.log('%c prev state', 'color: #db3; font-weight: bold', prevStateJS);
      console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
    } catch (e) {
      console.log(message);
      noGroup = true;
    }

    var returnValue = next(action);

    if( ! noGroup ) {
      /*
       * This will appear out of order in the logs, as it's run after the next action... but it may be useful
       * For debugging reducers.  To re-enable it, uncomment the line below
       */
      var nextState = store.getState();
      var nextStateJS = nextState.toJS()
      //console.log('%c next state ('+action.type+')', 'color: #ccc; font-size: 90%;', nextState);
      console.log('%c next state', 'color: #3d4; font-weight: bold;', nextStateJS);

      if (typeof console !== 'undefined') {
        console.groupCollapsed('Changes');
      }

      var diffs = deepDiff.getDiff(prevStateJS, nextStateJS);
      Object.keys(diffs).map( (diff) => {
        let d = diffs[diff]
        console.log(diff + ':', d.value);
      });
      console.groupEnd('-- grp end --');

      console.groupEnd('—— log end ——');

    }
  }

  return returnValue;

};
