import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import {
  eventsReducer as events,
} from './eventsReducer'

const reducers = combineReducers({
  events,
  routing: routerReducer,
  form: formReducer,
})

export default reducers
