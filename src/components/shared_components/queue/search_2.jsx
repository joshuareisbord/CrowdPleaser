import React from "react";

import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function searchMenu(props){


    if (!props.oAuth){ // user has not logged in
        return (
            <div>
                <Grid container spacing={0} direction={"column"} alignItems={'center'}>

                    <Grid item>
                        <Typography variant="body2" component="p" color="textSecondary" align="center">
                            Please login with Spotify to add songs to the queue.
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button onClick={props.handleOauth} color={'primary'}>
                            Login with Spotify
                        </Button>
                    </Grid>

                </Grid>
            </div>
        );
    }
    return ( // user is logged in (oAuth has been set)
        <div>
            <form>

                <Grid container direction={'column'} alignItems={'center'} spacing={1}>

                    <Grid item>
                        <Typography variant="body2" component="p" color="textSecondary" align="center">
                            Search for a song to be added to the queue
                        </Typography>
                    </Grid>

                    <Grid item>
                        <TextField
                            variant="outlined"
                            size="small"
                            name="songSearch"
                            label="Enter song name">
                        </TextField>
                    </Grid>

                    <Grid item>
                        <Button variant={"contained"} color={'primary'}>
                            Search...
                        </Button>
                    </Grid>

                </Grid>
            </form>
        </div>
    )
}