import axios from 'axios'

const instance = axios.create()

function apiInstance() {
  return instance
}

function handleServerError(error) {
  if (error.response.status == 401) {
    return {
      type: 'server.UNAUTHORISED',
    }
  }
  return {
    type: 'server.GENERIC_ERROR',
    message: error.message,
  }
}

export {
  apiInstance,
  handleServerError,
}
