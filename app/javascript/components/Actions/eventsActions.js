export const FETCH_LIST = 'events.FETCH_LIST'
export const FETCH_LIST_SUCCESS = 'events.FETCH_LIST_SUCCESS'

const fetchList = () => ({
  type: 'events.FETCH_LIST',
})

const fetchListSuccess = events => ({
  type: 'events.FETCH_LIST_SUCCESS',
  events: events,
})

export default {
  fetchList,
  fetchListSuccess,
}
