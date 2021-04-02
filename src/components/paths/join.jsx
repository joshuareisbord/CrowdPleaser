import React, { Component } from 'react';

import JoinRoom from './join/join_form';
import GuestPage from './join/guest/guest'

import veryifyKey from '../../util/veryifykey'

import { db_get_room } from '../../util/databaseUtil'

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

	/* Function used to set state of room key*/
	async handleSubmit() {

		console.log("Key Submitted.... waiting on verification!")
		let arr = db_get_room(this.state.roomKey) // this is the song queue.
		console.log("Getting Initial Song Queue")
		setTimeout(() =>  {

			console.log("Settting Room Key")
		}, 1);
		this.setState({ queue: arr }) // sets the state of the queue to reflect the database.


		this.setState({ keyValid: true })
	} // end of setRoomKey method

	/* Function used to set state of room key on change*/
	handleChange(key) {
		this.setState({ roomKey: key.target.value });
	} // end of setRoomKey method

	/* Render function of Join class.*/
	render() {
		if (this.state.roomKey == null || this.state.keyValid === false || this.state.keyValid == null) { // no key entered or it was wrong.
			return (
				<JoinRoom setKey={this.handleSubmit.bind(this)} keyState={this.state.keyValid} change={this.handleChange.bind(this)} /> // prompt user to input a valid room key
			);
		}
		else { // key is valid and has been entered
			return (
				<GuestPage roomKey={this.state.roomKey} queue={this.state.queue} /> // send user to the room of the key entered
			);
		}
	} // end of render function
} // end of Join class

export default Join;

