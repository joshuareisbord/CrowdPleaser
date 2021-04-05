import React, {Component} from "react";

import firebase from '../../firebase'

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

import VoteButtons from './queue/vote_buttons'

import Search from './queue/search'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";
import List from "@material-ui/core/List";
import songs from "./queue/test.json";



/* This is the queue component */
class Queue extends Component{

    constructor(props) {
        super(props);

        this.state = {
            queue: null,
            oAuth: false,
            docID: '',
            keyValid: null,
            searchQuery: [] // tmp value to make "functionality" work
        }

        // reference to room which user is entering.
        this.roomRef = null
    }

    /*
    Function handles user votes
    * When answer is true, increment the song of id
    * else, decrement it
    */
    handleVote(answer, id){
        this.roomRef
            .collection('queue')
            .doc(id) // get document of song (found using its ID)
            .update(
                {'priority': firebase.firestore.FieldValue.increment(answer ? 1 : -1)} // update priority
            ).then(() => {
        });
    }

    /*
    * Temp function used to set oAuth key
    */
    handleOauth(){
        this.setState({oAuth: true});
    }

    /*
    * Temp function used to set search query
    */
    handleSearch(){

        this.setState({searchQuery:

            songs.tracks.items.map(song =>

                <ListItem button key={song.id}>

                    {/* List item image (album cover) */}
                    <ListItemAvatar>
                        <Avatar src={song.album.images[0].url}/>
                    </ListItemAvatar>

                    {/* List item song name & artist name*/}
                    <ListItemText
                        primary={song.name}
                        secondary={song.album.artists[0].name}
                    />

                </ListItem>
            )})
    }

    /*
    * Temp function used to set search query
    */
    handleClear() {

        this.setState({searchQuery: []})

    }

    /*
    * Get/set the queue on each snapshot for the provided documentID
    */
    getQueue(){

        /* Gets the reference to the room given the documentID from user input*/
        this.roomRef = firebase.firestore()
            .collection('rooms')
            .doc(this.state.docID);

        this.roomRef.collection('queue') // room queue
            .orderBy('priority', 'desc') // highest priority song first
            .onSnapshot(querySnapshot => { // on snapshot (change of db) re-render the queue

                const queueItems = querySnapshot.docs.map(doc =>

                    <ListItem key={doc.id}>

                        {/* List item image (album cover) */}
                        <ListItemAvatar>
                            <Avatar src={doc.data().image}/>
                        </ListItemAvatar>

                        {/* List item song name & artist name*/}
                        <ListItemText
                            primary={doc.data().name}
                            secondary={doc.data().artist}
                        />

                        {/* If user is a host, dont render the vote buttons!*/}
                        {!this.props.host &&
                            <VoteButtons id={doc.id} handleVote={this.handleVote.bind(this)}/>
                        }

                    </ListItem>

                ); // end map() (assembly of queue)

                this.setState({queue: queueItems}); // render queue snapshot

            }); // end of onSnapshot()

    } // end of loadQueue()

    /*
    * When the Queue component renders at first, this function will be called.
    */
    componentDidMount() {
        // gets ID of document representing the room inputted
        firebase.firestore()
            .collection('rooms')
            .where('roomID', '==', this.props.room) // find the document with its roomID field equal to input.
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0){ // no documents in the query (room does not exist)
                    this.setState({keyValid: false});
                } // end if
                else { // get first document, and set docID in state to its ID
                    querySnapshot.forEach((doc) => {
                        this.setState({docID: doc.id, keyValid: true});
                    }) // end for each
                } // end else
            }); // end then()
    } // end of componentDidMount


    /*
    This is the render method of the queue class.
    */
    render() {

        const messages = {

            "host" : {
                "header": "Song Queue:"
            },
            "guest" : {
                "header": "Use the arrows next to the songs in the queue to vote"
            }
        }


        /* Queue loading/invalid */
        if (this.state.queue == null){

            // room key is invalid!
            if(this.state.docID === '' && !this.state.keyValid){
                return (
                    <div>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>

                            <Grid container item direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <Typography variant="h6" component="p" color="textSecondary" align="center">
                                        Invalid Room Key!
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" component="p" color="textSecondary" align="center">
                                        The room key inputted was incorrect. Please try again.
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Button href={document.referrer}>Try another room key</Button>
                            </Grid>
                        </Grid>
                    </div>
                );
            }

             // get the song queue
            this.getQueue();

            // render loading queue message
            return (
                <div>Loading song queue...</div>
            );
        }

        /* Return the current song queue */
        return (
            <div>
                    <Grid container direction="column" justify="center" alignItems="center">

                        <Grid item>
                            <Typography variant="h6" color="textSecondary" paragraph={true} align={'center'}>
                                {
                                    this.props.host ?

                                        messages.host.header
                                        :
                                        messages.guest.header
                                }
                            </Typography>
                        </Grid>

                        <Grid item>
                            <List>
                                {this.state.queue}
                            </List>

                        </Grid>

                        {/* Host will not render the search box. */}
                        {!this.props.host &&

                            <Grid item>
                                <Search
                                    handleOauth={this.handleOauth.bind(this)}
                                    oAuth={this.state.oAuth}
                                    searchQuery={this.state.searchQuery}
                                    handleSearch={this.handleSearch.bind(this)}
                                    handleClear={this.handleClear.bind(this)}
                                />
                            </Grid>

                        }

                    </Grid>
            </div>
        );

    } // end render() method

} // end Queue class

export default Queue;
