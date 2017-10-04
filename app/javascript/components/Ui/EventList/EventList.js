import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

import EventRow from './EventRow'

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

const EventList = ({ classes, list }) => {
  return (
    <Paper className={classes.root}>
      {
        (list.length === 0) ?
        (
          <p>No results found</p>
        ) : (
          <div>
            {
              list.map(event => (
                <EventRow key={event.id}
                  event={event} />
              ))
            }
          </div>
        )
      }
    </Paper>
  )
}

const mapStateToProps = (state, ownProps) => {
  const events = state.events || {}
  return {
    list: events.list || [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EventList))
