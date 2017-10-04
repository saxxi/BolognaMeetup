import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import logger from 'redux-logger'
import { Route } from 'react-router'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'

import reducers from '../Reducers'
import sagas from '../Sagas'

const storeFactory = () => {
  const history = createHistory()
  const sagaMiddleware = createSagaMiddleware()

  let middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
    logger
  )

  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension())
  }

  const store = createStore(
    reducers,
    {},
    middleware
  )
  sagaMiddleware.run(sagas)
  return { store, history }
}

export { storeFactory }
