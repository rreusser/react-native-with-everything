'use strict'

import { Platform } from 'react-native'

//var fetch = Platform.OS === 'web'? require('ReactJsonp'): require('ReactFetch');
var fetch = window.fetch

export default fetch
