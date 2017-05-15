import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Content from './Content';

class Wrapper extends Component {
    render() {
        return (
            <div className="row">
                <Navbar />
                <Content />
            </div>
        );
    }
}

export default Wrapper;