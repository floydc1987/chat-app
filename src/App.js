import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './Components/RoomList.jsx';
import RoomForm from './Components/RoomForm.jsx'
import MessageList from './Components/MessageList.jsx';
import Authentication from './Components/Authentication.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: null,
      user: null
    };

    var config = {
      apiKey: "AIzaSyANV6z00XWcKoZ7anjgADmALq2G1MqVO1s",
      authDomain: "chat-app-ef3c3.firebaseapp.com",
      databaseURL: "https://chat-app-ef3c3.firebaseio.com",
      storageBucket: "gs://chat-app-ef3c3.appspot.com"
    };

    firebase.initializeApp(config);
    this.setActiveRoom = this.setActiveRoom.bind(this)
    this.setUser = this.setUser.bind(this)

    firebase.auth().getRedirectResult().then(this.setUser)
    firebase.auth().onAuthStateChanged( user => {
      if(user == null) {
        this.removeUser();
      }
    });
  }

  removeUser() {
    this.setState({
      user: null
    })
  }

  setUser(result) {
    this.setState({
      user: result.user
    })
  }

  setActiveRoom(room) {
    this.setState({
      activeRoom: room
    })
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <Authentication firebase={firebase} user={this.state.user}/>
        <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom} activeRoom={this.state.activeRoom}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
    );
  }
};

export default App;
