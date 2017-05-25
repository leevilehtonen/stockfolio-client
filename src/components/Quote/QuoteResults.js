import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Progress, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Col, Input } from 'reactstrap';
import QuoteItem from './QuoteItem';
import { addStockToUser } from '../../actions/dataActions';

class QuoteResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            modalTitle: '',
            modalValue: 0,
            modalValid: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
    }
    openModal(symbol, name) {
        this.setState({
            modal: true,
            modalSymbol: symbol,
            modalTitle: (name) ? (name + ' (' + symbol + ')') : (symbol)
        });
    }

    closeModal() {
        this.setState({
            modal: false,
            modalTitle: '',
            modalValue: 0,
            modalValid: false,
        });
    }

    handleChange(e) {
        this.setState({ modalValue: e.target.value }, () => {
            let numeric = /^[-+]?[0-9]+$/;
            this.setState({ modalValid: numeric.test(this.state.modalValue) });
        });
    }

    handleModalSubmit() {
        this.props.addStock(this.state.modalSymbol, this.state.modalValue);
        this.closeModal();
    }
    render() {

        if (this.props.isFetching) {
            return (
                <div>
                    <h5 className='text-white'>Loading</h5>
                    <Progress animated color="primary" value="100" />
                </div>
            );
        } else {

            return (
                <div>
                    <hr className='hr-dark mt-2 mb-4' />
                    <Table size='sm' hover striped className='small borderless quote-result-table'>
                        <thead>
                            <tr>
                                <th className='quote-result-table-td'>#</th>
                                <th className='quote-result-table-td'>Symbol</th>
                                <th className='quote-result-table-td'>Name</th>
                                <th className='quote-result-table-td'>Type</th>
                                <th className='quote-result-table-td'>SE</th>
                                <th className='quote-result-table-td'>Category</th>
                                <th className='quote-result-table-td'>Info</th>
                                <th className='quote-result-table-td'>Add</th>
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
                                    addStock={this.openModal}
                                />
                            })}
                        </tbody>
                    </Table>

                    <Modal isOpen={this.state.modal}  >
                        <ModalHeader>{this.state.modalTitle}</ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="count" sm={2}>Count:</Label>
                                <Col sm={10}>
                                    <Input type="number" name="count" id="count" value={this.state.modalValue} placeholder="How many..." onChange={this.handleChange} />
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleModalSubmit} disabled={!(this.state.modalValid)}>Add</Button>{' '}
                            <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                </div>
            );
        }
    }
}

QuoteResults.propTypes = {
    quotes: PropTypes.arrayOf(PropTypes.object).isRequired,
    addStock: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired

};
const mapStateToProps = (state, ownProps) => {
    return {
        quotes: state.data.quotes,
        isFetching: state.data.isFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addStock: (symbol, count) => {
            dispatch(addStockToUser(symbol, count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteResults);