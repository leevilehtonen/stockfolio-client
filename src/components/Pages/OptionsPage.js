import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';
import { isAuthenticated } from '../../actions/authActions';


class OptionsPage extends Component {

    componentWillMount() {
        this.props.isAuthenticated(null, '/login');
        this.props.updateTitle('Options', 'USER');
    }

    render() {
        return (
            <div>
                <p className='text-white'>TODO: User options: country, currency, language etc.</p>
            </div>
        );
    }
}

OptionsPage.propTypes = {
    updateTitle: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        isAuthenticated: (positiveRedirect, negativeRedirect) => {
            dispatch(isAuthenticated(positiveRedirect, negativeRedirect));
        },
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsPage);