import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-2">
                <h1 className="app-title display-4 text-white">Stockfolio</h1>
            </div>
            <div className="col-8">
                <p className="text-muted m-0 p-0">DASHBOARD</p>
                <h1 className="display-4 text-white">Quote</h1>
            </div>
            <div className="col-2">
                <input className="form-control text-white" type="text" value="10/12/2017" id="date-display" readOnly></input>
            </div>
        </div>
        );
    }
}

Header.propTypes = {

};

export default Header;