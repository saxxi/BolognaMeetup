import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import ActionCableProvider from 'react-actioncable-provider'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

// # App
import App from '../components/App'
import { storeFactory } from '../components/Store'
const { store, history } = storeFactory()
const ACTION_CABLE_URL = 'ws://localhost:3000/cable'

document.addEventListener('DOMContentLoaded', () => {

  // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ActionCableProvider url={ACTION_CABLE_URL}>
          <App />
        </ActionCableProvider>
      </ConnectedRouter>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
