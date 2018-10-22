import React, { Component } from 'react';
import RoomForm from './RoomForm.jsx';
import './../RoomList.css';
import MessageList from './MessageList.jsx';



class RoomList extends Component {
	constructor(props) {
  	super(props);

    this.state = {
      rooms: [],
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  };

	componentDidMount() {
	  this.roomsRef.on('child_added', snapshot => {
	  	const room = snapshot.val();
      room.key = snapshot.key;
	    this.setState({ rooms: this.state.rooms.concat( room ) })
	  });
	}

	render() {
		console.log(this.props.activeRoom)
		return(
			<div>
				<ul>
					{this.state.rooms.map((room) => <li onClick={() => this.props.handler(room)} className={this.props.activeRoom == room ? 'highlight': ''}>{room.name}</li>)}
				</ul>
				<RoomForm roomsRef={this.roomsRef}/>
			</div>
		);
	}
}

export default RoomList;