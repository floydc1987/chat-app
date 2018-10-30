import React, { Component } from 'react';

class MessageForm extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		value: ''
  	};
  	
  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  };

	handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	event.preventDefault();
  	if (this.state.value === '') {
			return;
		}
    this.props.messagesRef.push({
		  content: this.state.value,
      roomId: this.props.activeRoomKey,
      sentAt: new Date().getTime(),
      username: this.props.user.displayName
		});
		this.setState({value: ''});
  }


	render() {
		return(
			<form onSubmit={this.handleSubmit}>
        <label>
          Message:{' '}
          <input type="text" value={this.state.value} onChange={this.handleChange} disabled={this.props.user == null}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
		);

	}
 };




export default MessageForm;