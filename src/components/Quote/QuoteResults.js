import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import QuoteItem from './QuoteItem';

class QuoteResults extends Component {
    render() {
        return (
            <div>
                <hr className='mt-2 mb-4' />
                <Table size='sm' hover striped className='borderless'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>SE</th>
                            <th>Category</th>
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
                                / >
                            }
                        )}
                    </tbody>
                </Table>
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