import { put } from 'redux-saga/effects'

import eventsActions from '../Actions/eventsActions'

export function *locationChanged(action) {
  if (action.payload.pathname == '/') {
    const query = new URLSearchParams(action.payload.search)
    yield put(eventsActions.fetchList())
  }
}
