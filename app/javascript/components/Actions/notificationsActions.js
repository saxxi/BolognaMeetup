export const UNAUTHORISED = 'server.UNAUTHORISED'
export const GENERIC_ERROR = 'server.GENERIC_ERROR'
export const NOTIFICATION = 'server.NOTIFICATION'
export const CLOSE_NOTIFICATION = 'notification.CLOSE_NOTIFICATION'

const unauthorised = () => ({
  type: 'server.UNAUTHORISED',
})

const notification = (message, isError = true, linkTo = null) => ({
  type: 'server.NOTIFICATION',
  message,
  isError,
  linkTo,
})

const close = () => ({
  type: CLOSE_NOTIFICATION,
})

export default {
  unauthorised,
  notification,
  close,
}
