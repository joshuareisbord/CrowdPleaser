import React, {Component} from 'react';

import JoinRoom from '../components/menus/join';
import GuestPage from './guest'

import veryifyKey from '../util/veryifykey'

class Join extends Component{

  constructor(props){
    super(props);

    this.state = {
      roomKey: null,
      keyValid: null
    }

  } // end of constructor

  /* Function used to set state of room key*/
  handleSubmit(){
    console.log("Key Submitted.... waiting on verification")
    console.log(this.state.roomKey)

    // ----- VERIFY KEY HERE! -----
    
    this.setState({keyValid: true})
  } // end of setRoomKey method

  /* Function used to set state of room key on change*/
  handleChange(key){
      this.setState( {roomKey: key.target.value} );
  } // end of setRoomKey method

  /* Render function of Join class.*/
  render() {
    if (this.state.roomKey == null || this.state.keyValid === false || this.state.keyValid == null) { // no key entered or it was wrong.
      return (
        <JoinRoom setKey={this.handleSubmit.bind(this)} keyState={this.state.keyValid} change={this.handleChange.bind(this)}/> // prompt user to input a valid room key
      );
    }
    else { // key is valid and has been entered
      return (
        <GuestPage roomKey={this.state.roomKey}/> // send user to the room of the key entered
      );
    }
  } // end of render function
} // end of Join class

export default Join;

