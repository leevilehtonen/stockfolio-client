import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress, Input, Form, FormGroup, Label, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { updateTitle, fetchUserData } from '../../actions/mainActions';

class ProfilePage extends Component {

    componentWillMount() {
        this.props.fetchUserData();
        this.props.updateTitle('Profile', 'USER');
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
                <Form>

                    {Object.keys(this.props.user).map((key, index) => {
                        return (
                            <FormGroup key={index} row className='text-white'>
                                <Label for="exampleEmail" sm={2}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                                <Col sm={10}>
                                    <Input className="form-control-dark text-white" type="text" value={this.props.user[key]} id="exampleEmail" readOnly></Input>
                                </Col>
                            </FormGroup>
                        );
                    })}

                </Form>

            );
        }
    }
}

ProfilePage.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.object,
    updateTitle: PropTypes.func.isRequired,
    fetchUserData: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.main.isFetching,
        user: state.main.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        },
        fetchUserData: () => {
            dispatch(fetchUserData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

