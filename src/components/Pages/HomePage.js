import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';

class HomePage extends Component {

    
    componentWillMount() {
        this.props.updateTitle('Home', 'MENU');
    }
    

    render() {
        return (
            <div>
            </div>
        );
    }



}

HomePage.propTypes = {
    updateTitle: PropTypes.func.isRequired
}

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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);