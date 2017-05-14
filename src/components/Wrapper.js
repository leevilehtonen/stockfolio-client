import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../containers/Nav';
import Content from './Content';

class Wrapper extends Component {
    render() {
        return (
            <div className="row">
                <Nav />
                <Content />
            </div>
        );
    }
}

Wrapper.propTypes = {

};

export default Wrapper;