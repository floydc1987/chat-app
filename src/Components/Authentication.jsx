import React, { Component } from 'react';


class Authentication extends Component {
  constructor(props) {
    super(props);

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
  }

	login() {
		var provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithRedirect(provider);
  }

  logout() {
  	this.props.firebase.auth().signOut();
  }

  render() {
  	var clickFunction;
  	var buttonName;
  	var displayName;

  	if(this.props.user == null) {
  		clickFunction = this.login;
  		buttonName = "Login";
  	} else {
  		clickFunction = this.logout;
  		buttonName = "log Out";
  		displayName = this.props.user.displayName;
  	}


    return (
      <div className="authentication">
        <button onClick={clickFunction}>{buttonName}</button>
        <span>{displayName}</span>
      </div>
    );
  }
};

export default Authentication;
