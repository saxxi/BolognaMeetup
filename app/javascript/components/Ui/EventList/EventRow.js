import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  eventRow: {
    padding: '5px 20px 10px 20px',
    background: '#eee',
    marginBottom: 20,
  }
})

const EventRow = ({ classes, event }) => {

  const {
    id, name, place, evt_date, start_time, end_time, topics,
  } = event

  return (
    <div className={classes.eventRow}>
      <h3>{name}</h3>
      <p>{place}</p>
      <div>on {evt_date} at {start_time} to {end_time}</div>
      <div>
        <p>Topics: {topics.map(t => t.name).join(', ')}</p>
      </div>
    </div>
  )
}

export default withStyles(styles)(EventRow)
