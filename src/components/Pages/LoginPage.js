import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { updateTitle } from '../../actions/mainActions';

const intialState = {
    username: '',
    password: '',

    usernameValid: false,
    passwordValid: false,

    usernameTouched: false,
    passwordTouched: false
}

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, intialState);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.updateTitle('Login', 'MENU');
    }

    handleChange = (e) => {
        if (e.target.name === 'username') {
            this.setState({ username: e.target.value }, () => {
                this.setState({ usernameValid: validator.isLength(this.state.username, { min: 1, max: 32 }) });
            })
        } else if (e.target.name === 'password') {
            this.setState({ password: e.target.value }, () => {
                this.setState({ passwordValid: validator.isLength(this.state.password, { min: 1, max: 128 }) });
            })
        }
    }

    handleBlur = (field) => (e) => {
        this.setState({ [field + "Touched"]: true });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(user);
        this.setState(Object.assign({}, intialState));
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">

                    <FormGroup color={(!this.state.usernameValid && this.state.usernameTouched) ? "danger" : ""} className="text-white">
                        <Label for="usernameInput">Username</Label>
                        <Input type="text" value={this.state.username} onChange={this.handleChange} onBlur={this.handleBlur("username")} name="username" id="usernameInput" className="text-white form-control-dark" placeholder="Enter username" />
                        {(!this.state.usernameValid && this.state.usernameTouched) ? <FormFeedback>Username is not in valid form.</FormFeedback> : null}
                        <FormText color="muted">Please provide your username.</FormText>
                    </FormGroup>

                    <FormGroup color={(!this.state.passwordValid && this.state.passwordTouched) ? "danger" : ""} className="text-white">
                        <Label for="passwordInput">Password</Label>
                        <Input type="password" value={this.state.password} onChange={this.handleChange} onBlur={this.handleBlur("password")} name="password" id="passwordInput" className="text-white form-control-dark" placeholder="Enter password" />
                        {(!this.state.passwordValid && this.state.passwordTouched) ? <FormFeedback>Password is not in valid form.</FormFeedback> : null}
                        <FormText color="muted">Please provide your password.</FormText>
                    </FormGroup>

                    <Button type="submit" color="primary" disabled={!(
                        this.state.usernameValid &&
                        this.state.usernameTouched &&
                        this.state.passwordValid)} >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    updateTitle: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.auth.isFetching,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: (user) => {
            dispatch(loginUser(user));
        },
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);