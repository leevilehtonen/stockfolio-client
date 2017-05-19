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
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsPage);