import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem'


class Navbar extends Component {


    render() {
        return (
            <nav className=" col-2 sidebar">
                <ul className="nav nav-pills flex-column">
                    {this.props.items.map((item, index) => {
                        return <NavItem key = {index} {...item} />
                    }
                    )}
                </ul>
            </nav>
        );
    }
}

Navbar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Navbar;