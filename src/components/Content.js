import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import OverviewPage from './Pages/OverviewPage';
import StocksPage from './Pages/StocksPage';
import QuotePage from './Pages/QuotePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import LogoutPage from './Pages/LogoutPage';
import ProfilePage from './Pages/ProfilePage';
import OptionsPage from './Pages/OptionsPage';


class Content extends Component {
    render() {
        return (
            <main className="col-10 offset-2 pt-3">
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />

                <Route path="/user/stocks/overview" component={OverviewPage} />
                <Route path="/user/stocks/portfolio" component={StocksPage} />
                <Route path="/stocks/quote" component={QuotePage} />

                <Route path="/user/profile" component={ProfilePage} />
                <Route path="/user/options" component={OptionsPage} />
                <Route path="/user/logout" component={LogoutPage} />


            </main>
        );
    }
}

Content.propTypes = {

};

export default Content;