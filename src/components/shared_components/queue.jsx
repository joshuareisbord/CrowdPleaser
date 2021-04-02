import React, {Component} from "react";

import firebase from '../../firebase'

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


/* This is the queue component */
class Queue extends Component{

    constructor(props) {
        super(props);

        this.state = {
            queue: null
        }
    }

    /* When the Queue component renders at first, this function will be called.*/
    componentDidMount() {

        const ref = firebase.firestore(); // database reference
        const roomRef = ref.collection('rooms').doc(this.props.room); // room reference

        roomRef.collection('queue')
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

                        {/* Upvote button */}
                        <ListItemAvatar>
                            <IconButton edge="end" aria-label="upvote">
                                <ExpandLessIcon/>
                            </IconButton>
                        </ListItemAvatar>

                        {/* Down vote button */}
                        <ListItemAvatar>
                            <IconButton edge="end" aria-label="downvote">
                                <ExpandMoreIcon/>
                            </IconButton>
                        </ListItemAvatar>

                    </ListItem>

                ) // end queueItems mapping

                this.setState({queue: queueItems}); // return queue
                console.log("Updated queue!")
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
