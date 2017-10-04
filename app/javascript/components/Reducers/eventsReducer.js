function eventsReducer(state = {}, action) {
  switch (action.type) {
    case 'events.FETCH_LIST_SUCCESS':
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
