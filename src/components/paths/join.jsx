import React, { Component } from 'react';

import JoinRoom from './join/join_form';
import GuestPage from './join/guest/guest_page'

import veryifyKey from '../../util/veryifykey'

import { db_get_room } from '../../util/dbUtil'

/*
*
* This is the Join component.
*
* This is the root of the join path.
*
* This component stores the state of the join menu.
* 	- Room Key
* 	- Key Validity Boolean
*	- Song Queue
*
* */
class Join extends Component {

	/* This is the Join class constructor.*/
	constructor(props) {
		super(props);

		/* State holds room key, key valid boolean, and song queue*/
		this.state = {
			roomKey: null,
			keyValid: null,
			queue: []
		}

	} // end of constructor

	/*
	* Function used to set state value of keyValid
	* handSubmit function called when 'Join' button is pressed
	*/
	handleSubmit() {
		this.setState({ keyValid: true })
	} // end of setRoomKey method

	/*
	* Function used to set state value of roomKey
	* handleChange is called any time there is a change made to input field
	* roomKey == current input field value
	*/
	handleChange(key) {
		this.setState({ roomKey: key.target.value });
	} // end of setRoomKey method

	/* Render function of Join class.*/
	render() {
		if (this.state.roomKey == null || this.state.keyValid == null) { // no key entered or it was wrong.
			return (
				<JoinRoom setKey={this.handleSubmit.bind(this)} keyState={this.state.keyValid} change={this.handleChange.bind(this)} /> // prompt user to input a valid room key
			);
		}
		else { // key has been entered
			return (
				<GuestPage roomKey={this.state.roomKey} queue={this.state.queue} /> // send user to the room of the key entered
			);
		}
	} // end of render function
} // end of Join class

export default Join;

