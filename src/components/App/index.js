import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
import Navbar from '../Navbar';
import Content from '../Content';
import { AppContainer } from './style';

const App = () => {
    return (
        <Router>
            <AppContainer>
                <Navbar />
                <Switch>
                    <Route path="/sport/:sportName" component={Content} />
                    <Redirect from="/" to="/sport/soccer" />
                </Switch>
            </AppContainer>
        </Router>
    );
};

export default App;
