import React, { Component, PropTypes } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ButtonGroup, Button, Progress, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { Line, defaults } from 'react-chartjs-2';
import { createChartData, chartOptions } from '../../utils/chartConfig'
import { fetchQuoteDataHistory } from '../../actions/dataActions'

defaults.scale.ticks.autoSkipPadding = 10;

class QuoteView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeDataSource: 'day'
        }

        this.getCurrentDatasource = this.getCurrentDatasource.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    getCurrentDatasource() {
        switch (this.state.activeDataSource) {
            case 'day':
                return this.props.daySeries;
            case 'week':
                return this.props.weekSeries;
            case 'month':
                return this.props.monthSeries;
            case 'year':
                return this.props.yearSeries;
            case 'threeMonth':
                return this.props.threeMonthSeries;
            case 'threeYear':
                return this.props.threeYearSeries;
            case 'all':
                return this.props.allSeries;
            default:
                return '';
        }
    }

    onButtonClick(time) {
        this.props.loadChartData(this.props.quote.symbol, time);
        this.setState({ activeDataSource: time });
    }

    render() {

        return (
            <Modal isOpen={this.props.isOpen} className='modal-lg'>
                {!this.props.isFetching ?
                    (<div>
                        <ModalHeader>
                            {
                                this.props.quote.name ?
                                    (this.props.quote.name + ' (' + (this.props.quote.symbol) + ')')
                                    :
                                    (this.props.quote.symbol)
                            }
                        </ModalHeader>
                        <ModalBody className='p-0'>
                            <Table size='sm' hover striped className='mb-0 small quote-view-table'>
                                <thead>
                                    <tr>
                                        <th />
                                        <th>S.E.</th>
                                        <th>Previous</th>
                                        <th>Ask</th>
                                        <th>Bid</th>
                                        <th>Open</th>
                                        <th>Change</th>
                                        <th>Change(%)</th>
                                        <th>Low (d)</th>
                                        <th>High (d)</th>
                                        <th>Low (y)</th>
                                        <th>High (y)</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td />
                                        <td>{this.props.quote.stockExchange || 'No data'}</td>
                                        <td>{this.props.quote.previousClose || 'No data'}</td>
                                        <td>{this.props.quote.ask || 'No data'}</td>
                                        <td>{this.props.quote.bid || 'No data'}</td>
                                        <td>{this.props.quote.open || 'No data'}</td>
                                        <td>{this.props.quote.change || 'No data'}</td>
                                        <td>{(this.props.quote.changeInPercent) ? (this.props.quote.changeInPercent.toFixed(4)) : 'No data'}</td>
                                        <td>{this.props.quote.daysLow || 'No data'}</td>
                                        <td>{this.props.quote.daysHigh || 'No data'}</td>
                                        <td>{this.props.quote["52WeekLow"] || 'No data'}</td>
                                        <td>{this.props.quote["52WeekHigh"] || 'No data'}</td>
                                        <td />
                                    </tr>

                                </tbody>
                            </Table>
                            <hr className='mt-0' />
                            <div className='row mx-2'>
                                <div className='col-10'>
                                    {(!this.props.isFetching) ? <Line data={createChartData(this.getCurrentDatasource())} options={chartOptions} /> : null}
                                </div>
                                <div className='col-2'>
                                    <ButtonGroup vertical className='btn-block'>
                                        <Button size="sm" color='secondary' onClick={() => this.onButtonClick('day')} active={this.state.activeDataSource === 'day'} className='btn-block'>Day</Button>
                                        <Button size="sm" color='secondary' onClick={() => this.onButtonClick('week')} active={this.state.activeDataSource === 'week'} className='btn-block'>Week</Button>
                                        <Button size="sm" color='secondary' onClick={() => this.onButtonClick('month')} active={this.state.activeDataSource === 'month'} className='btn-block'>Month</Button>
                                        <Button size="sm" color='secondary' onClick={() => this.onButtonClick('threeMonth')} active={this.state.activeDataSource === 'threeMonth'} className='btn-block'>3 Months</Button>
                                        <Button size="sm" color='secondary' onClick={() => this.onButtonClick('year')} active={this.state.activeDataSource === 'year'} className='btn-block'>Year</Button>
                                        <Button size="sm" color='secondary' onClick={() => this.onButtonClick('threeYear')} active={this.state.activeDataSource === 'threeYear'} className='btn-block'>3 Year</Button>
                                        <Button size="sm" color='secondary' onClick={() => this.onButtonClick('all')} active={this.state.activeDataSource === 'all'} className='btn-block'>All</Button>
                                        <Button size="sm" color='info' onClick={() => this.onButtonClick(this.state.activeDataSource)} className='btn-block'>Update</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                            <hr className='mb-0' />
                            <Table size='sm' hover striped className='small quote-view-table mb-0'>
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Dividend yield</th>
                                        <th>Dividend/share</th>
                                        <th>Dividend date</th>
                                        <th>Last dividend date</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td />
                                        <td>{this.props.quote.dividendYield || 'No data'}</td>
                                        <td>{this.props.quote.dividendPerShare || 'No data'}</td>
                                        <td>{this.props.quote.dividendPayDate || 'No data'}</td>
                                        <td>{this.props.quote.exDividendDate || 'No data'}</td>
                                        <td />
                                    </tr>
                                </tbody>
                            </Table>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.props.close}>Close</Button>
                        </ModalFooter>
                    </div>)
                    :
                    (<div>
                        <ModalHeader>Loading</ModalHeader>
                        <Progress animated color="primary" value="100" />
                    </div>)}

            </Modal>
        );
    }
}

QuoteView.propTypes = {
    quote: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
    daySeries: PropTypes.arrayOf(PropTypes.object),
    weekSeries: PropTypes.arrayOf(PropTypes.object),
    monthSeries: PropTypes.arrayOf(PropTypes.object),
    yearSeries: PropTypes.arrayOf(PropTypes.object),
    threeMonthSeries: PropTypes.arrayOf(PropTypes.object),
    threeYearSeries: PropTypes.arrayOf(PropTypes.object),
    allSeries: PropTypes.arrayOf(PropTypes.object),
    loadChartData: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        quote: state.data.quoteSnapshot,
        isFetching: state.data.isFetching,
        daySeries: state.data.quoteHistDay,
        weekSeries: state.data.quoteHistWeek,
        monthSeries: state.data.quoteHistMonth,
        yearSeries: state.data.quoteHistYear,
        threeMonthSeries: state.data.quoteHistThreeMonth,
        threeYearSeries: state.data.quoteHistThreeYear,
        allSeries: state.data.quoteHistAll

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadChartData: (symbol, time) => {
            dispatch(fetchQuoteDataHistory(symbol, time));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteView);