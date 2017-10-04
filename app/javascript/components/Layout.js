import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  sidebarHeader: {
    padding: '50px 10px',
    textAlign: 'center',
    background: '#666',
  },
  listItem: {
    width: 200,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class Layout extends Component {
  state = {
    drawer: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open,
    })
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={this.state.drawer} onRequestClose={this.toggleDrawer(false)}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer(false)}>
                <div>
                  <div className={classes.sidebarHeader}>
                    <h3>Your Profile</h3>
                    <p>
                      <a>a.saxena.email@gmail.com</a>
                    </p>
                  </div>
                  <Divider />
                  <List>
                    <ListItem className={classes.listItem} button>
                      <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem className={classes.listItem} button>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </List>
                </div>
              </div>
            </Drawer>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Button
                color="contrast"
                to={'/'}
                component={props => <Link {...props}/>}
              >BolognaMeetup</Button>
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
