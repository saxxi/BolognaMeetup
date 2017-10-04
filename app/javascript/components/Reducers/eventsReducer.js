import { FETCH_LIST_SUCCESS } from '../Actions/eventsActions'

function eventsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.events,
      }
    default:
      return state
  }
}

export {
  eventsReducer,
}
