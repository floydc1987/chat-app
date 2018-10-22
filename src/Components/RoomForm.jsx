import React, { Component } from 'react';

class RoomForm extends Component {
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
    this.props.roomsRef.push({
		  name: this.state.value,
      messages: []
		});
		this.setState({value: ''});
  }


	render() {
		return(
			<form onSubmit={this.handleSubmit}>
        <label>
          Chatroom Name:{' '}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
		);

	}
 };








export default RoomForm;