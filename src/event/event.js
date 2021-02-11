
import React, {Component} from 'react'
import {Button, Grid} from "@material-ui/core";

class EventLanding extends Component {

    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(){
        this.props.doLogout()
    }

    render(){

        return (

            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

                <Grid align={"center"}>
                    <Button onClick={this.onLogout} color={"secondary"} variant={"contained"} size={"large"}>Logout</Button>
                </Grid>

            </div>


        );
    }
}

export default EventLanding;