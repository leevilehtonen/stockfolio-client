import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem'
import { connect } from 'react-redux';



class Navbar extends Component {


    render() {
        return (
            <nav className=" col-2 sidebar">
                <ul className="nav nav-pills flex-column">
                    {this.props.items.map((item, index) => {
                        return <NavItem key={index} {...item} location={this.props.location} />
                    }
                    )}
                </ul>
            </nav>
        );
    }
}

Navbar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    location: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.main.links,
        location: state.router.location
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
