import React, {Component} from "react";
import firebase from '../../../firebase'

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {Icon} from "@material-ui/core";

class VoteButton extends Component {

    constructor(props) {
        super(props);

        /*
        * Type: true - upvote
        *       false - down-vote
        *
        * Used: false - user has not clicked on it
        *       true - user has clicked on it
        */
        this.state = {
            answer: false,
            used: false,
            docID: this.props.id
        }
    }

    doUpVote() {
        // call props function and upvote
        this.props.handleVote(true, this.state.docID)
        // set state to change conditional rendering
        this.setState({answer: true, used: true})
    }

    doDownVote() {
        // call props function and down vote
        this.props.handleVote(false, this.state.docID)
        // set state to change conditional rendering
        this.setState({answer: false, used: true})
    }

    genKey(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    render() {

        if (this.state.used){
            return ( // result icon

                [
                    <ListItemAvatar key={this.genKey(10)}>
                        <Icon edge="end">
                            {this.state.answer ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                        </Icon>
                    </ListItemAvatar>
                ]
            )
        }
        return ( // upvote and down-vote button

                [
                    <ListItemAvatar key={this.genKey(10)}>
                        <IconButton
                            onClick={this.doUpVote.bind(this)}
                            edge="end"
                            aria-label="upvote">
                            <ExpandLessIcon/>
                        </IconButton>
                    </ListItemAvatar>

                    ,

                    <ListItemAvatar key={this.genKey(10)}>
                        <IconButton
                            onClick={this.doDownVote.bind(this)}
                            edge="end"
                            aria-label="downvote">
                            <ExpandMoreIcon/>
                        </IconButton>
                    </ListItemAvatar>

                ]
        );

    }
}

export default VoteButton