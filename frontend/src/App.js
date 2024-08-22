import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage';
import BookingPage from './pages/BookingPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/booking" component={BookingPage} />
            </Switch>
        </Router>
    );
};

export default App;
