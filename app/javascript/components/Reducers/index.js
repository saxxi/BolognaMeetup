import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { eventsReducer as events } from './eventsReducer'
import { notificationsReducer as notification } from './notificationsReducer'

const reducers = combineReducers({
  events,
  notification,
  routing: routerReducer,
  form: formReducer,
})

export default reducers
