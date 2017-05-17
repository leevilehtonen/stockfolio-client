import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchQuotes} from '../../actions/dataActions'
import { Form, FormGroup, Label, Input, InputGroup, InputGroupButton } from 'reactstrap';

class QuoteQuery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitQuery(this.state.quote);
        this.setState({quote: ''});        
    }

    handleChange = (e) => {
        this.setState({quote: e.target.value});
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className='text-white'>
                        <Label for="queryInput">Search</Label>
                        <InputGroup>
                            <Input type='text'value={this.state.quote} onChange={this.handleChange} name='query' id='queryInput' placeholder='Name, symbol..' className='form-control-dark text-white'/>
                            <InputGroupButton color="primary">Search</InputGroupButton>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

QuoteQuery.propTypes = {

}


const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitQuery: (query) => {
            dispatch(fetchQuotes(query));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteQuery);