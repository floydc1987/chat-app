import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './Components/RoomList.jsx';
import RoomForm from './Components/RoomForm.jsx'
import MessageList from './Components/MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: null
    };

    var config = {
      apiKey: "AIzaSyANV6z00XWcKoZ7anjgADmALq2G1MqVO1s",
      authDomain: "chat-app-ef3c3.firebaseapp.com",
      databaseURL: "https://chat-app-ef3c3.firebaseio.com",
      storageBucket: "gs://chat-app-ef3c3.appspot.com"
    };
    firebase.initializeApp(config);

    this.handler = this.handler.bind(this)
  }

  handler(room) {
    this.setState({
      activeRoom: room
    })
  }

  render() {
    console.log(this.state.activeRoom)
    return (
      <div className="App">
        <RoomList firebase={firebase} handler={this.handler} activeRoom={this.state.activeRoom}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
    );
  }
};

export default App;
