import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';
import { fetchQuoteData } from '../../actions/dataActions';
import QuoteView from '../Quote/QuoteView';
import QuoteQuery from '../Quote/QuoteQuery';
import QuoteResults from '../Quote/QuoteResults';

class QuotePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };

        this.openQuote = this.openQuote.bind(this);
        this.closeQuote = this.closeQuote.bind(this);
    }

    componentWillMount() {
        this.props.updateTitle('Quote', 'DASHBOARD');
    }

    render() {
        return (
            <div>
                <QuoteQuery />
                {this.props.showResults ? <QuoteResults openQuote={this.openQuote} /> : null}
                <QuoteView />
                
                <QuoteView close={this.closeQuote} isOpen={this.state.modal} />
            </div>
        );
    }
    openQuote(quote) {
        this.props.loadQuote(quote);
        this.setState({
            modal: true
        });
    }
    closeQuote() {
        this.setState({
            modal: false
        });
    }
}

QuotePage.propTypes = {
    showResults: PropTypes.bool.isRequired,
    updateTitle: PropTypes.func.isRequired,
    loadQuote: PropTypes.func.isRequired
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
        },
        loadQuote: (quote) => {
            dispatch(fetchQuoteData(quote));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotePage);