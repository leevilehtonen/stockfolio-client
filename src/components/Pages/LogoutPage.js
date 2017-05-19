import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';
import { logoutUser } from '../../actions/authActions';

class LogoutPage extends Component {

    componentWillMount() {
        this.props.updateTitle('Logout', 'USER');
        this.props.logoutUser();
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

LogoutPage.propTypes = {
    updateTitle: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        },
        logoutUser: () => {
            dispatch(logoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);