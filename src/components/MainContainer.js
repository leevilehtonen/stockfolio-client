import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Private from './Private';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import Register from '../containers/Register'

class MainContainer extends Component {
    render() {
        return (
            <div className="row">
                <nav className=" col-2 sidebar">
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <span className="pl-3 text-muted">DASHBOARD</span>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-3">Overview</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-3">Stocks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-3">Quote</Link>
                        </li>
                        <li className="nav-item mt-4">
                            <span className="pl-3 text-muted">USER</span>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-3">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-3">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-3">Logout</Link>
                        </li>
                        <li className="nav-item mt-4">
                            <span className="pl-3 text-muted">MENU</span>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-3">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link pl-3">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link pl-3">Register</Link>
                        </li>
                    </ul>
                </nav>

                <main className="col-10 offset-2 pt-3">

                    <Route exact path="/" component={Home} />
                    <Route path="/quote" component={Quote} />
                    <Route path="/private" component={Private} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={Register} />
                </main>
            </div>
        );
    }
}

MainContainer.propTypes = {

};

export default MainContainer;