import React, { Component } from 'react';


class DeleteButton extends Component {
	constructor(props) {
  	super(props);

  	this.deleteButton = this.deleteButton.bind(this);
	}

	deleteButton() {
		console.log(this.props.messageKey);
		this.props.messagesRef.child(this.props.messageKey).remove();  
	}


	render() {
		return(
			<div>
				<button onClick={this.deleteButton}>Delete</button>
			</div>
		);
	}
}

export default DeleteButton;