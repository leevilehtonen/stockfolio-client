import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';

class OverviewPage extends Component {

    componentWillMount() {
        this.props.updateTitle('Overview', 'DASHBOARD');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

OverviewPage.propTypes = {

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

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);