import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';
import QuoteView from '../Quote/QuoteView';
import QuoteQuery from '../Quote/QuoteQuery';
import QuoteResults from '../Quote/QuoteResults';
 
class QuotePage extends Component {

    componentWillMount() {
        this.props.updateTitle('Quote', 'DASHBOARD');
    }

    render() {
        return (
            <div>
                <QuoteQuery/>
                {this.props.showResults? <QuoteResults/> : null}
                <QuoteView/>
            </div>
        );
    }
}

QuotePage.propTypes = {

}

const mapStateToProps = (state, ownProps) => {
    return {
        showResults: state.data.showResults
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotePage);