import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';

class OptionsPage extends Component {

    componentWillMount() {
        this.props.updateTitle('Options', 'USER');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

OptionsPage.propTypes = {

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

export default connect(mapStateToProps, mapDispatchToProps)(OptionsPage);