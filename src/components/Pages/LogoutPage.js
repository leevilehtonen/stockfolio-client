import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';

class LogoutPage extends Component {

    componentWillMount() {
        this.props.updateTitle('Logout', 'USER');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

LogoutPage.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);