import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Box } from '@material-ui/core'

import Footer from './components/footers/footer';

import Home from './components/paths/home';
import HostviewPage from './components/paths/create/host/host_page';
import GuestviewPage from './components/paths/join/guest/guest_page';
import CreatePage from './components/paths/create';
import JoinPage from './components/paths/join';
import ErrorPage from './components/paths/404';


export default function App() {

  const styles = {
    exteriorBox: {
        display: 'flex', 
        width: '100vw', 
        height: '100vh', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column',
    },
    interriorBox: {
      display: 'flex', 
      width: '100vw', 
      height: '90vh', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
    },
    footerBox: {
        display: 'flex', 
        width: '100vw', 
        height: '10vh', 
        alignItems: 'center', 
        justifyContent: 'flex-end',
        flexDirection: 'column',
      },
  }

  return (

    <div>
        {/* This box bounds the entire page */}
        <Box style={styles.exteriorBox}>

                {/* Page renders in this box */}
                <Box style={styles.interriorBox} justifyContent='center'>
                <Router>
                    <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route exact path="/hostview">
                        <HostviewPage />
                      </Route>
                      <Route exact path="/guestview">
                        <GuestviewPage />
                      </Route>
                      <Route exact path="/create">
                        <CreatePage />
                      </Route>
                      <Route exact path="/join">
                        <JoinPage />
                      </Route>
                      <Route exact path="/404">
                        <ErrorPage />
                      </Route>
                    </Switch>
                </Router>
                </Box>

                {/* Footer renders in this page */}

                <Box style={styles.footerBox}>
                <Footer/>
                </Box>
        </Box>

    </div>

    
  );
}
