import { call, put, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import api from '../Services/events-api'
import { handleServerError } from '../Utils/serverUtils'

export function *list(action) {
  let result

  try {
    result = yield call(api.list)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put({
    type: 'events.FETCH_LIST_SUCCESS',
    events: result.data.events,
  })
}

export default {
  list,
}
