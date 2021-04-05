import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";


export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.handleClear()
    };

    if (!props.oAuth){ // not logged in

        return (
            <div>
                <Grid container spacing={1} direction={"column"} alignItems={'center'}>

                    <Grid item>
                        <Typography variant="body2" component="p" color="textSecondary" align="center">
                            Please login with Spotify to add songs to the queue.
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button onClick={props.handleOauth} color={'primary'} variant={'outlined'}>
                            Login with Spotify
                        </Button>
                    </Grid>

                </Grid>
            </div>
        );
    } // end if

    // user is logged into spotify account.
    return (
        <div>

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Search for a song
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">
                    Search
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Enter a song title below to search
                    </DialogContentText>
                    <TextField
                        autoFocus
                        label="Track name"
                        fullWidth
                    />
                    <List>
                        {props.searchQuery}
                    </List>
                </DialogContent>

                <DialogActions>
                    <Button onClick={props.handleSearch} color="primary" variant={'contained'}>
                        Search
                    </Button>
                    <Button onClick={handleClose} color="secondary" variant={'contained'}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    ); // end return (user is logged in)
}