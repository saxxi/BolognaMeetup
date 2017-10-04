import {
  NOTIFICATION,
  CLOSE_NOTIFICATION,
} from '../Actions/notificationsActions'

function notificationsReducer(state = {}, action) {
  switch (action.type) {
    case NOTIFICATION:
      return {
        ...state,
        message: action.message,
        isError: action.isError,
        linkTo: action.linkTo,
      }
    case CLOSE_NOTIFICATION:
      return {}
    default:
      return state
  }
}

export {
  notificationsReducer,
}
