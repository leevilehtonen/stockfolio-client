import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import OverviewPage from './Pages/OverviewPage';
import StocksPage from './Pages/StocksPage';
import QuotePage from './Pages/QuotePage';
import Login from '../containers/Login';
import Register from '../containers/Register';


class Content extends Component {
    render() {
        return (
            <main className="col-10 offset-2 pt-3">
                <Route exact path="/" component={HomePage} />
                <Route path="/user/stocks/overview" component={OverviewPage} />
                <Route path="/user/stocks/portfolio" component={StocksPage} />
                <Route path="/stocks/quote" component={QuotePage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </main>
        );
    }
}

Content.propTypes = {

};

export default Content;