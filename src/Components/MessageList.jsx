import React, { Component } from 'react';
import MessageForm from './MessageForm.jsx';

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
				<ul>
					{this.state.messages.filter((message) => 
						this.props.activeRoom.key === message.roomId
					).map((message) => {
						let date = new Date(message.sentAt);
						let timeStamp = date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2,'0');
						console.log(message);
						return <li key={message.key}>{message.content} <div>{timeStamp.padStart(2:'0')} {message.username}</div></li>
					})}
				</ul>
				<MessageForm messagesRef={this.messagesRef} activeRoomKey={this.props.activeRoom.key} user={this.props.user}/>
			</div>
		);
	}
}

export default MessageList;