import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Image } from '@material-ui/icons';




import { db_get_room } from '../util/databaseUtil'

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
}));

const songQueue = (queue) => {

  queue.map(( { docID, songID, name, artist, image, priority} ) => {
    return (

        <ListItem>

          <ListItemAvatar>
            <Avatar src='https://i.scdn.co/image/ab67616d0000b273ee0f38410382a255e4fb15f4'/>
          </ListItemAvatar>

          <ListItemText>
            primary="Song"
            secondary={"Artist Name"}
          </ListItemText>

          <ListItemAvatar>
            <IconButton edge="end" aria-label="upvote">
              <ExpandLessIcon />
            </IconButton>
          </ListItemAvatar>

          <ListItemAvatar>
            <IconButton edge="end" aria-label="downvote">
              <ExpandMoreIcon />
            </IconButton>
          </ListItemAvatar>

        </ListItem>

    ) // end of return
  }) // end of map

}




export default function Guestview(props) {

  const classes = useStyles();

  console.table(props.queue)

  return (

    <div>
      <h1>This is the guest landing.</h1>
      <h1>{props.roomKey}</h1>

      <Grid container>

        <Grid item xs={12} md={12}>
            <Typography variant="h6" className={classes.title}>
              Avatar with text and icon
            </Typography>
            <div className={classes.demo}>
              <List>
                {props.queue.map(( { docID, songID, name, artist, image, priority} ) => {
                            return (

                                <ListItem key={docID}>

                                  <ListItemAvatar>
                                    <Avatar src={image}/>
                                  </ListItemAvatar>

                                  <ListItemText
                                    primary={name}
                                    secondary={artist}
                                  />

                                  <ListItemAvatar>
                                    <IconButton edge="end" aria-label="upvote">
                                      <ExpandLessIcon />
                                    </IconButton>

                                    
                                  </ListItemAvatar>

                                  <ListItemAvatar>
                                    <IconButton edge="end" aria-label="downvote">
                                      <ExpandMoreIcon />
                                    </IconButton>
                                  </ListItemAvatar>

                                </ListItem>

                            ) // end of return
                          }) // end of map
                        }
              </List>
            </div>
          </Grid>

      </Grid>
    </div>
    
    
  );
}

