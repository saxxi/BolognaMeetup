import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { orange } from 'material-ui/colors'
import CloseIcon from 'material-ui-icons/Close'
import IconButton from 'material-ui/IconButton'

import notificationsActions from '../Actions/notificationsActions'

const styles = theme => ({
  notification: {
    display: 'block',
    background: orange[100],
    margin: theme.spacing.unit * 3,
    padding: '20px',
    position: 'relative',
  },
  notificationClose: {
    position: 'absolute',
    top: 0,
    right: 0,
  }
})

const Notification = ({
  classes,
  notification,
  handleClose,
}) => {
  const { message, isError = true, linkTo = null } = notification
  if (!message) { return null }

  const messageContent = (
    <div>
      <p>{message}</p>
      <IconButton
        onClick={handleClose}
        className={classes.notificationClose}>
        <CloseIcon />
      </IconButton>
    </div>
  )

  return (linkTo) ? (
    <Link className={classes.notification} to={linkTo}>
      {messageContent}
    </Link>
  ) : (
    <div className={classes.notification}>
      {messageContent}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    notification: state.notification || {},
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => {
      dispatch(notificationsActions.close())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notification))
