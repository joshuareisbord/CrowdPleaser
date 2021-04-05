import React, { Component } from 'react';

import CreateRoom from './create/create_form';

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
    // TODO: CREATE NEW ROOM IN DATABASE

    // Temporary code for demonstration/ui testing
    this.setState({
      authKey: 'some spotify oAuth key',
      roomKey: '12AB',
      hostSecret: 'something secret'
    })

  }

  render() {
    if (this.state.roomKey == null || this.state.authKey == null || this.state.hostSecret == null) { // room has not been created
      return (
        <CreateRoom handleLogin={this.handleLogin.bind(this)}/>
      );
    }
    // key is valid, and user has signed in with their spotify account.
    return (
      <HostPage roomKey={this.state.roomKey} authKey={this.state.authKey} hostSecret={this.state.hostSecret}/> // send user to the room of the key entered
    );

  } // end of render function

} // end of Create class

export default Create;