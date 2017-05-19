import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap'

class Header extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
    }
    getDate() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if ((day + '').length === 1) {
            day = '0' + day;
        }
        if ((month + '').length === 1) {
            month = '0' + month;
        }

        return day + '/' + month + '/' + year;
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <h1 className="title-text display-4 text-white">Stockfolio</h1>
                </div>
                <div className="col-8">
                    <p className="text-muted m-0 p-0">{this.props.categoryTitle}</p>
                    <h1 className="display-4 text-white">{this.props.pageTitle}</h1>
                </div>
                <div className="col-2">
                    <Input className="form-control-dark text-white" type="text" value={this.getDate()} id="date-display" readOnly></Input>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    categoryTitle: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        pageTitle: state.main.pageTitle,
        categoryTitle: state.main.categoryTitle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);