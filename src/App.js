
import React, {Component} from 'react';

import LoginLanding from './login/login'
import EventLanding from './event/event'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isHost: false,
      partyID: "",
      hostID: "",
      personalID: ""
    };

    this.logInOutHandler = this.logInOutHandler.bind(this);

  }

  logInOutHandler(isLoggedIn=false, isHost=false, partyID="", hostID="", personalID="") {

    // function called with no attributes when logging out,
    // function called with partyID, personalID, remaining are optional depending if user is host or user is loging in

    this.setState({isLoggedIn: isLoggedIn,
                           isHost: isHost,
                           partyID: partyID,
                           hostID: hostID,
                           personalID: personalID});

  }

  render() {


    if (this.state.isLoggedIn){ // show the event page for users partyID
      return(
          <EventLanding doLogout={this.logInOutHandler}/>
      );
    }

    else { // show login page to user
      return(
          <LoginLanding doLogin={this.logInOutHandler}/>
      );
    }
  }
}

export default App;
