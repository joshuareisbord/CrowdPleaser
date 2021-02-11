import React, {Component} from 'react'
import {Button, colors, Grid} from "@material-ui/core";

class LoginLanding extends Component {

    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(isLoggedIn=true, isHost=false, partyID, hostID="", personalID){
        this.props.doLogin(isLoggedIn, partyID="something")
    }

    render(){

        return (

            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

                <Grid alignItems={"center"}>
                    <Button onClick={this.onLogin} color={"primary"} variant={"contained"} size={"large"}>Login</Button>
                </Grid>

            </div>



        );
    }
}

export default LoginLanding;