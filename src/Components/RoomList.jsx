import React, { Component } from 'react';
import RoomForm from './RoomForm.jsx';
import './../RoomList.css';


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
		return(
			<div>
				<ul>
					{this.state.rooms.map((room) => <li key={room.key} onClick={() => this.props.setActiveRoom(room)} className={this.props.activeRoom === room ? 'highlight': ''}>{room.name}</li>)}
				</ul>
				<RoomForm roomsRef={this.roomsRef}/>
			</div>
		);
	}	
}

export default RoomList;