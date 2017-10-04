import { apiInstance } from '../Utils/serverUtils'

const instance = apiInstance()

const list = (pageNumber, pageSize) => (
  instance.get('/events.json', {
    params: {
      page_number: pageNumber,
      page_size: pageSize
    }
  })
)

export default {
  list,
}
