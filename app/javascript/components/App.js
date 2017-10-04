import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

import withRoot from './withRoot'
import Layout from './Layout'
import EventList from './Ui/EventList'

const styles = theme => ({
  container: {
    padding: '40px',
  },
})

const App = ({ classes }) => (
  <div>
    <Layout>
      <div className={classes.container}>
        <Switch>
          <Route exact path="/" component={EventList}/>
        </Switch>
      </div>
    </Layout>
  </div>
)

export default withRoot(withStyles(styles)(App))
