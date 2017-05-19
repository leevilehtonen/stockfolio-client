import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Progress } from 'reactstrap';
import { updateTitle } from '../../actions/mainActions';
import { fetchUsersStocks, fetchQuoteData, deleteUsersStock } from '../../actions/dataActions';
import StockItem from './StockItem';
import QuoteView from '../Quote/QuoteView';

class StocksPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };

        this.openQuote = this.openQuote.bind(this);
        this.closeQuote = this.closeQuote.bind(this);
    }

    componentWillMount() {
        this.props.updateTitle('Stocks', 'DASHBOARD');
        this.props.fetchStocks();
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



    render() {

        if (this.props.isFetching) {
            return (
                <div>
                    <h5 className='text-white'>Loading</h5>
                    <Progress animated color="primary" value="100" />
                    <QuoteView close={this.closeQuote} isOpen={this.state.modal} />
                </div>
            );
        } else {
            return (
                <div>
                    <Table size='sm' hover striped className='small borderless quote-result-table'>
                        <thead>
                            <tr>
                                <th className='quote-result-table-td'>#</th>
                                <th className='quote-result-table-td'>Symbol</th>
                                <th className='quote-result-table-td'>Name</th>
                                <th className='quote-result-table-td'>Ask</th>
                                <th className='quote-result-table-td'>Bid</th>
                                <th className='quote-result-table-td'>Close</th>
                                <th className='quote-result-table-td'>Change</th>
                                <th className='quote-result-table-td'>Change(%)</th>
                                <th className='quote-result-table-td'>Dividend</th>
                                <th className='quote-result-table-td'>Amount</th>
                                <th className='quote-result-table-td'>Value</th>
                                <th className='quote-result-table-td'>SE</th>
                                <th className='quote-result-table-td'>Info</th>
                                <th className='quote-result-table-td'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.stocks.map((item, index) => {
                                return <StockItem
                                    key={index}
                                    number={index}
                                    id={item.id}
                                    symbol={item.symbol}
                                    name={item.name}
                                    ask={item.ask}
                                    bid={item.bid}
                                    close={item.previousClose}
                                    change={item.change}
                                    changeInPercent={item.changeInPercent}
                                    dividend={item.dividendPerShare}
                                    amount={item.amount}
                                    value={item.currentValue}
                                    se={item.stockExchange}
                                    openQuote={this.openQuote}
                                    deleteStock={this.props.deleteStock}
                                />
                            })}
                        </tbody>
                    </Table>

                    <QuoteView close={this.closeQuote} isOpen={this.state.modal} />


                </div>
            );
        }
    }
}

StocksPage.propTypes = {
    updateTitle: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.data.isFetching,
        stocks: state.data.stocks
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        },
        fetchStocks: () => {
            dispatch(fetchUsersStocks());
        },
        loadQuote: (symbol) => {
            dispatch(fetchQuoteData(symbol));
        },
        deleteStock: (id) => {
            dispatch(deleteUsersStock(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StocksPage);