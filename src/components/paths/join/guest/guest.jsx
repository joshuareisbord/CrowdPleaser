import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Queue from '../../../shared_components/queue'

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
	})
); // end of useStyles const assignment



export default function Guest(props) {

	const classes = useStyles();

	// console.table(props.queue)

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

							<Queue room={props.roomKey}/>
							
						</List>
					</div>
				</Grid>

			</Grid>
		</div>


	);
}

