import React, { Component } from 'react';

import CreateRoom from '../components/menus/create';

import veryifyKey from '../util/veryifykey';

import HostPage from './host'

class Create extends Component{

  constructor(props){
    super(props)

    this.state = {
      spotifyKey: null,
      roomKey: null,
      keyValid: null
    }

  } // end of constructor

  /* Function used to set state of room key*/
  setRoomKey(key){

    this.setState({keyValid: true,
                   roomKey: key})
  } // end of setRoomKey method

  /* Function used to set state of Spotify key*/
  setSpotifyKey(key){

      this.setState({spotifyKey: key})
  } // end of setSpotifyKey method

  handleLogin(){

    // Call to backend function to create room
    // Set state roomKey to value returned by backend

    // Prompt user with spotify login
    // Set state spotifyKey to value returned by Spotify

    this.setRoomKey('1234');
    this.setSpotifyKey('something-returned-by-spotify')

    setTimeout(() =>  {
                        console.log(this.state.roomKey)
                        console.log(this.state.spotifyKey)
                      }, 1);


  }

  // /* Render function of Create class.*/
  // render() {
    
  //   return (
  //     // <CreateRoom setRoomKey={this.setRoomKey.bind(this)} setSpotifyKey={this.setSpotifyKey.bind(this)}/>
  //     <CreateRoom handleLogin={this.handleLogin.bind(this)}/>
  //   );
  // } // end of render method

  render() {
    if (this.state.roomKey == null || this.state.keyValid === false || this.state.keyValid == null || this.state.spotifyKey == null) { // no key entered or it was wrong.
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