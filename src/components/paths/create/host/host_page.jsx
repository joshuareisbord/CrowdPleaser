import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Queue from "../../../shared_components/queue";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            maxWidth: 752,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
        playbackBox: {
            display: 'flex',
            width: '20vw',
            height: '20vw',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
    })
); // end of useStyles const assignment


export default function Hostview(props) {

    const classes = useStyles();

    return (

        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={0}
        >

            <Grid item>
                <Box textAlign="center">

                    <Typography variant="h2" component="h2" gutterBottom={true}>
                        <Typography color="primary" variant="h2" component="span">
                            Room:
                        </Typography>
                        <Typography variant="h2" component="span">
                            {" " + props.roomKey}
                        </Typography>
                    </Typography>
                </Box>
            </Grid>

            {/* Queue */}
            <Grid item>
                <div className={classes.demo}>
                    <List>
                        <Queue room={props.roomKey} host={true}/>
                    </List></div>

            </Grid>
        </Grid>

    );
}

