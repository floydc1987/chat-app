import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './Components/RoomList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyANV6z00XWcKoZ7anjgADmALq2G1MqVO1s",
      authDomain: "chat-app-ef3c3.firebaseapp.com",
      databaseURL: "https://chat-app-ef3c3.firebaseio.com",
      storageBucket: "gs://chat-app-ef3c3.appspot.com"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
};

export default App;
