import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'reactstrap';
import { isAuthenticated } from '../../actions/authActions';
import { updateTitle } from '../../actions/mainActions';

class HomePage extends Component {


    componentWillMount() {
        this.props.isAuthenticated('/user/stocks/overview', '');
        this.props.updateTitle('Home', 'MENU');
    }


    render() {
        return (
            <div>
                <div className='text-center text-white'>
                    <h1 className="display-4">STOCKFOLIO</h1>
                    <p className="lead">Simple web application for monitoring your stock portfolio, getting real-time and historical stock data.</p>
                    <p className="lead">
                        <NavLink to='/login' exact={true} className="btn btn-primary btn-lg m-1">Log in</NavLink>
                        <NavLink to='/register' exact={true} className="btn btn-secondary btn-lg m-1">Register</NavLink>
                    </p>
                </div>
                <hr className='hr-dark my-4' />
                <div className='text-white'>
                    <Row className='mb-4'>
                        <Col>
                            <h1 className="title-text display-4">Manage</h1>
                            <p>You are able to store all of your holdings in one place. You have simple controls for managing differently priced patches. You are able to store stocks, funds, options, currencies etc.</p>
                        </Col>
                        <Col>
                            <h1 className="title-text display-4">Monitor</h1>
                            <p>All of your holdings can be monitored from one single page and all the relevant information is processed for you to use. More advanced data can be found easily also.</p>
                        </Col>
                        <Col>
                            <h1 className="title-text display-4">Real time data</h1>
                            <p>All data is fetched real time from Yahoo finance. Stockfolio also provides you historical data in periods of day, week, month, three months, year, three years and all. This data is also fetched from Yahoo finance.</p>
                        </Col>
                    </Row>
                </div>
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
        isAuthenticated: (positiveRedirect, negativeRedirect) => {
            dispatch(isAuthenticated(positiveRedirect, negativeRedirect));
        },
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);