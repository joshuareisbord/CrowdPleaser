import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';
import { blue } from '@material-ui/core/colors';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundSize: 'cover',
  },
  iconWrapper: {
    backgroundColor: blue[100],
    color: theme.palette.primary.main
  },
  actions: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  primaryAction: {
    width: '100%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
      width: 'auto'
    }
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section className={classes.section}>
  <Container maxWidth="xs">
    <Box py={16}>
      <Card variant="outlined">
        <CardContent>
          <Box display="flex" mt={3}>
            <Box mx="auto">
              <Avatar variant="rounded" className={classes.iconWrapper}>
                <AssignmentIndIcon />
              </Avatar>
            </Box>
          </Box>
          <Box mt={2} px={4}>
            <Typography variant="h5" component="h3" align="center" gutterBottom={true}>Join a Room</Typography>
            <Typography variant="body2" component="p" color="textSecondary" align="center">Enter the room code provided by the host</Typography>
            <Box my={3}>
              <form noValidate>
                  <Grid container 
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={2}>
                  <Grid item xs={12}>
                    <TextField variant="outlined" fullWidth size="small" name="roomkey" label="Enter room code"/>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" size="large" className={classes.primaryAction}>
                        Join
                      </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Box alignItems="center" justifyContent="space-between" className={classes.actions}>
                      <Link href="/create" color="textSecondary">Meant to create a room?</Link>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Container>
</section>
  );
}