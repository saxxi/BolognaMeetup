import axios from 'axios'

import notificationsActions from '../Actions/notificationsActions'

const instance = axios.create()

function apiInstance() {
  return instance
}

function handleServerError(error) {
  if (error.response.status == 401) {
    return notificationsActions.unauthorised()
  }
  return notificationsActions.notification(error.message)
}

export {
  apiInstance,
  handleServerError,
}
