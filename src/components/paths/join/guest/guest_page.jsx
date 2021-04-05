import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Queue from '../../../shared_components/queue'
import Box from "@material-ui/core/Box";

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



export default function Guest_page(props) {

	const classes = useStyles();

	return (

		<div>
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

			<Grid container>

				<Grid item xs={12} md={12}>
					<div className={classes.demo}>
						<List>

							<Queue room={props.roomKey} host={false}/>
							
						</List>
					</div>
				</Grid>

			</Grid>
		</div>

	);
}

