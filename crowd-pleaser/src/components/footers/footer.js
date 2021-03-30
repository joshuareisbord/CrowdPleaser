import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Component(props) {

  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={2} textAlign="center">
          <Box>
            <IconButton color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton target='_blank' href='https://github.com/joshuareisbord/CrowdPleaser' color="inherit" aria-label="LinkedIn">
              <GitHubIcon />
            </IconButton>
          </Box>
          <hr/>
          <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>© 2021 Crowd Pleaser. All rights reserved.</Typography>
        </Box>
      </Container>
    </footer>
  );
}