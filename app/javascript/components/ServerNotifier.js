import React, { Component, PropTypes } from 'react'
import { ActionCable } from 'react-actioncable-provider'

const channel = {
  // channel: `user_${window.JWT_UserId}`
  // channel: 'user_cbc146b1-d6dc-4754-9185-bc71f7a4a591'
  channel: 'UserChannel'
}

export default class ServerNotifier extends Component {
  state = {
    messages: []
  }

  onReceived (message) {
    console.log('received', message);
    // HERE dispatch the notification system
  }

  sendMessage = () => {
    const topics = this.refs.newMessage.value
    this.refs.roomChannel.perform('track_preference', { topics: topics })
  }

  render () {
    return (
      <div>
        <ActionCable
          ref='roomChannel'
          channel={channel}
          onReceived={this.onReceived} />
        <ul>
          {this.state.messages.map((message) =>
            <li key={message.id}>{message.body}</li>
          )}
        </ul>
        <input ref='newMessage' type='text' />
        <button onClick={this.sendMessage}>Send</button>
      </div>
    )
  }
}
