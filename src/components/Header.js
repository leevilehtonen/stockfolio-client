import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-2">
                <h1 className="title-text display-4 text-white">Stockfolio</h1>
            </div>
            <div className="col-8">
                <p className="text-muted m-0 p-0">{this.props.categoryTitle}</p>
                <h1 className="display-4 text-white">{this.props.pageTitle}</h1>
            </div>
            <div className="col-2">
                <input className="form-control text-white" type="text" value="10/12/2017" id="date-display" readOnly></input>
            </div>
        </div>
        );
    }
}

Header.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    categoryTitle: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        pageTitle : state.main.pageTitle,
        categoryTitle: state.main.categoryTitle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);