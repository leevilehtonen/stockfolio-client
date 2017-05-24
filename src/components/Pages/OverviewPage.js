import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../../actions/mainActions';
import { Pie } from 'react-chartjs-2';
import { fetchUsersStocks } from '../../actions/dataActions'
import {isAuthenticated} from '../../actions/authActions'
import { Row, Col, Progress } from 'reactstrap';
import { createPieData, pieOptions } from '../../utils/chartConfig';

class OverviewPage extends Component {

    componentWillMount() {
        this.props.isAuthenticated(null, '/login');
        this.props.updateTitle('Overview', 'DASHBOARD');
        this.props.fetchStocks();
    }

    render() {
        if (this.props.isFetching) {
            return (
                <div>
                    <h5 className='text-white'>Loading</h5>
                    <Progress animated color="primary" value="100" />
                </div>
            );
        }

        return (
            <div>
                <Row>
                    <Col>
                        {(!this.props.stocks || this.props.stocks.length === 0) ?
                            (<h1 className='title-text display-4 text-muted'>You don't have any stocks in your portfolio</h1>)
                            :
                            (<Pie data={createPieData(this.props.stocks)} options={pieOptions} />)
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

OverviewPage.propTypes = {
    isAuthenticated: PropTypes.func.isRequired,
    updateTitle: PropTypes.func.isRequired,
    fetchStocks: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    stocks: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.data.isFetching,
        stocks: state.data.stocks
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        isAuthenticated: (positiveRedirect, negativeRedirect) => {
            dispatch(isAuthenticated(positiveRedirect, negativeRedirect));
        },
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        },
        fetchStocks: () => {
            dispatch(fetchUsersStocks());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);