import React, {Component} from "react";

import firebase from '../../firebase'

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

import VoteButtons from './queue/vote_buttons'


/* This is the queue component */
class Queue extends Component{

    constructor(props) {
        super(props);

        this.state = {
            queue: null
        }

        this.roomRef = firebase.firestore() // reference to the room which queue represents.
            .collection('rooms')
            .doc(this.props.room);
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
                console.log("Updated song priority!")
        });
    }

    /* When the Queue component renders at first, this function will be called.*/
    componentDidMount() {

        this.roomRef.collection('queue') // room queue
            .orderBy('priority', 'desc') // highest priority song first
            .onSnapshot(querySnapshot => { // on snapshot (change of db) re-render the queue

                const queueItems = querySnapshot.docs.map(doc =>

                    <ListItem>

                        {/* List item image (album cover) */}
                        <ListItemAvatar>
                            <Avatar src={doc.data().image}/>
                        </ListItemAvatar>

                        {/* List item song name & artist name*/}
                        <ListItemText
                            primary={doc.data().name}
                            secondary={doc.data().artist}
                        />
                        <VoteButtons id={doc.id} handleVote={this.handleVote.bind(this)}/>

                    </ListItem>

                ) // end queueItems mapping

                this.setState({queue: queueItems}); // render queue snapshot

            }) // end of onSnapshot

    } // end of componentDidMount


    /* This is the render method of the queue class.
    * -----------------------------------------------------------
    * When the queue is not yet fetched, render a loading message
    * Else, render the fetched queue and its elements.
    * -----------------------------------------------------------
    * */
    render() {

        /* Render loading queue message */
        if (this.state.queue == null){
            return (
                <div>Loading song queue...</div>
            );
        }
        /* Return the current song queue */
        return (
            <div>
                {this.state.queue}
            </div>
        );

    } // end render method

} // end Queue class

export default Queue
