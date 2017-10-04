import {put} from 'redux-saga/effects'

export function *locationChanged(action) {
  if (action.payload.pathname == '/') {
    const query = new URLSearchParams(action.payload.search)
    yield put({
      type: 'events.FETCH_LIST',
    })
  }
}
