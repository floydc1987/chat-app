import React, { Component } from 'react';
import RoomForm from './RoomForm.jsx';

class MessageList extends Component {
	constructor(props) {
  	super(props);

    this.state = {
      messages: []
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
  };

  componentDidMount() {
	  this.messagesRef.on('child_added', snapshot => {
	  	const message = snapshot.val();
      message.key = snapshot.key;
	    this.setState({ messages: this.state.messages.concat( message ) })
	  });
	}

	render() {
		if(this.props.activeRoom === null) {
			return null;
		}
		return(
			<div>
				<ol>
					{this.state.messages.filter((message) => this.props.activeRoom.key == message.roomId).map((message) => <li>{message.content}</li>)}
				</ol>
			</div>
		);
	}
}

export default MessageList;