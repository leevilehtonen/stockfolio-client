import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';

class ProfilePage extends Component {

    componentWillMount() {
        this.props.updateTitle('Profile', 'USER');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

ProfilePage.propTypes = {

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

