import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Box } from '@material-ui/core'

import Footer from './components/footers/footer';

import IndexPage from './pages/Index.js';
import HostviewPage from './pages/host.js';
import GuestviewPage from './pages/guest.js';
import CreatePage from './pages/create.js';
import JoinPage from './pages/Join.js';
import ErrorPage from './pages/404.js';


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
                        <IndexPage />
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
