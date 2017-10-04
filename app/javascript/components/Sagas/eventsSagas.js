import { call, put, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import eventsActions from '../Actions/eventsActions'
import api from '../Services/events-api'
import { handleServerError } from '../Utils/serverUtils'

export function *list(action) {
  let result

  try {
    result = yield call(api.list)
  } catch (e) {
    yield put(handleServerError(e))
  }
  if (result) {
    yield put(eventsActions.fetchListSuccess(result.data.events))
  }
}

export default {
  list,
}
