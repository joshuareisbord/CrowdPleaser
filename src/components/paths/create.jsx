import React, { Component } from 'react';

import CreateRoom from './create/create_form';

import veryifyKey from '../../util/veryifykey';

import HostPage from './create/host/host_page'

class Create extends Component{

  constructor(props){
    super(props)

    this.state = {
      authKey: null,
      roomKey: null,
      hostSecret: null
    }

  } // end of constructor

  handleLogin(){
    // Create a new room in the database
  }


  render() {
    if (this.state.roomKey == null || this.state.spotifyKey == null) { // room has not been created
      return (
        <CreateRoom handleLogin={this.handleLogin.bind(this)}/>
      );
    }
    else { // key is valid and has been entered
      return (
        <HostPage roomKey={this.state.roomKey} spotifyKey={this.state.spotifyKey}/> // send user to the room of the key entered
      );
    }
  } // end of render function


} // end of Create class

export default Create;