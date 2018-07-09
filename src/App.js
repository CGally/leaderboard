import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Leaderboard from './components/Leaderboard.js';

var config = {
  apiKey: "AIzaSyDNkFwYVcL4865-9q-IwKYLNqc4ywy9-uQ",
  authDomain: "leaderboard-6e03c.firebaseapp.com",
  databaseURL: "https://leaderboard-6e03c.firebaseio.com",
  projectId: "leaderboard-6e03c",
  storageBucket: "leaderboard-6e03c.appspot.com",
  messagingSenderId: "699921742824"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Leaderboard firebase={ firebase } />
      </div>
    );
  }
}

export default App;
