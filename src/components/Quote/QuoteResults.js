import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table , Progress} from 'reactstrap';
import QuoteItem from './QuoteItem';

class QuoteResults extends Component {
    render() {
        return (

            <div>
                <hr className='hr-dark mt-2 mb-4' />
                {!this.props.isFetching ?
                    (
                        <Table size='sm' hover striped className='small borderless quote-result-table'>
                            <thead>
                                <tr>
                                    <th className='quote-result-table-td'>#</th>
                                    <th className='quote-result-table-td'>Symbol</th>
                                    <th className='quote-result-table-td'>Name</th>
                                    <th className='quote-result-table-td'>Type</th>
                                    <th className='quote-result-table-td'>SE</th>
                                    <th className='quote-result-table-td'>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.quotes.map((item, index) => {
                                    return <QuoteItem 
                                        key={index}
                                        number={index}
                                        symbol={item.symbol}
                                        name={item.name}
                                        type={item.type}
                                        se={item.exchDisp}
                                        cat={item.typeDisp}
                                        openQuote={this.props.openQuote}
                                    />
                                })}
                            </tbody>
                        </Table>)
                    :
                    (<div>
                        <h5 className='text-white'>Loading</h5>
                        <Progress animated color="primary" value="100" />
                    </div>)}
            </div>
        );
    }
}

QuoteResults.propTypes = {

};
const mapStateToProps = (state, ownProps) => {
    return {
        quotes: state.data.quotes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteResults);