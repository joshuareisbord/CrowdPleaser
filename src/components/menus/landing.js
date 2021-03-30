import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    }
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section className={classes.section}>
  <Container maxWidth="md">

    <Box textAlign="center">

      <Typography variant="h2" component="h2" gutterBottom={true}>
        <Typography color="primary" variant="h2" component="span">Crowd Pleaser </Typography>
        <Typography variant="h2" component="span"></Typography>
      </Typography>

      <Container maxWidth="sm">
        <Typography variant="subtitle1" color="textSecondary" paragraph={true}>What would you like to do?</Typography>
      </Container>

      <Box mt={2}>
        <Button variant="contained" color="primary" className={classes.primaryAction} href='/join'>Join</Button>
        <Button variant="contained" color="secondary" className={classes.primaryAction} href='/create'>Host</Button>
      </Box>

    </Box>

  </Container>
</section>
  );
}