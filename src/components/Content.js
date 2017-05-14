import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import Private from './Pages/Private';
import Login from '../containers/Login';
import Register from '../containers/Register';


class Content extends Component {
    render() {
        return (
            <main className="col-10 offset-2 pt-3">
                <Route exact path="/" component={Home} />
                <Route path="/quote" component={Quote} />
                <Route path="/private" component={Private} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </main>
        );
    }
}

Content.propTypes = {

};

export default Content;