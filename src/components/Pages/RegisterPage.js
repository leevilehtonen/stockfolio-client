import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import {registerUser} from '../../actions/authActions';
import { updateTitle } from '../../actions/mainActions';

const initialState = {
    email: '',
    name: '',
    username: '',
    password: '',
    passwordRepeat: '',

    emailValid: false,
    nameValid: false,
    usernameValid: false,
    passwordValid: false,
    passMatch: false,

    emailTouched: false,
    nameTouched: false,
    usernameTouched: false,
    passwordTouched: false,
    passwordRepeatTouched: false
}

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {initialState};
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.updateTitle('Register', 'MENU');
    }

    handleChange = (e) => {

        if (e.target.name === 'email') {
            this.setState({ email: e.target.value }, () => {
                this.setState({ emailValid: validator.isEmail(this.state.email) });
            });
        } else if (e.target.name === 'name') {
            this.setState({ name: e.target.value }, () => {
                this.setState({ nameValid: validator.isLength(this.state.name, { min: 5, max: 64 }) });
            });
        } else if (e.target.name === 'username') {
            this.setState({ username: e.target.value }, () => {

                this.setState({ usernameValid: validator.isLength(this.state.username, { min: 5, max: 32 }) });
            });
        } else if (e.target.name === 'password') {
            this.setState({ password: e.target.value }, () => {
                this.setState({ passwordValid: validator.isLength(this.state.password, { min: 5, max: 128 }) });
                this.setState({ passMatch: validator.equals(this.state.passwordRepeat, this.state.password) });

            });
        } else if (e.target.name === 'passwordRepeat') {
            this.setState({ passwordRepeat: e.target.value }, () => {
                this.setState({ passMatch: validator.equals(this.state.passwordRepeat, this.state.password) });
            });
        }
    }

    handleBlur = (field) => (e) => {
        this.setState({ [field + "Touched"]: true });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        }
        this.props.registerUser(user);
        this.setState(initialState);
    }


    render() {
        return (

            <div>
                <Form onSubmit={this.handleSubmit} className="register-form">

                    <FormGroup color={(!this.state.emailValid && this.state.emailTouched) ? "danger" : ""} className="text-white">
                        <Label for="emailInput">Email</Label>
                        <Input type="text" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur("email")} name="email" id="emailInput" className="text-white form-control-dark" placeholder="Enter email" />
                        {(!this.state.emailValid && this.state.emailTouched) ? <FormFeedback>Email is not in valid form.</FormFeedback> : null}
                        <FormText color="muted">Please provide your email address.</FormText>
                    </FormGroup>

                    <FormGroup color={(!this.state.nameValid && this.state.nameTouched) ? "danger" : ""} className="text-white">
                        <Label for="nameInput">Name</Label>
                        <Input type="text" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur("name")} name="name" id="nameInput" className="text-white form-control-dark" placeholder="Enter name" />
                        {(!this.state.nameValid && this.state.nameTouched) ? <FormFeedback>Name is not in valid form.</FormFeedback> : null}
                        <FormText color="muted">Please provide your full name.</FormText>
                    </FormGroup>

                    <FormGroup color={(!this.state.usernameValid && this.state.usernameTouched) ? "danger" : ""} className="text-white">
                        <Label for="usernameInput">Username</Label>
                        <Input type="text" value={this.state.username} onChange={this.handleChange} onBlur={this.handleBlur("username")} name="username" id="usernameInput" className="text-white form-control-dark" placeholder="Enter username" />
                        {(!this.state.usernameValid && this.state.usernameTouched) ? <FormFeedback>Username is not in valid form.</FormFeedback> : null}
                        <FormText color="muted">Please provide a unique username (5-64 characters).</FormText>
                    </FormGroup>

                    <FormGroup color={((!this.state.passwordValid && this.state.passwordTouched) || (!this.state.passMatch && this.state.passwordRepeatTouched)) ? "danger" : ""} className="text-white">
                        <Label for="passwordInput">Password</Label>
                        <Input type="password" value={this.state.password} onChange={this.handleChange} onBlur={this.handleBlur("password")} name="password" id="passwordInput" className="text-white form-control-dark" placeholder="Enter password" />
                        <Input type="password" value={this.state.passwordRepeat} onChange={this.handleChange} onBlur={this.handleBlur("passwordRepeat")} name="passwordRepeat" id="passwordRepeatInput" className="text-white form-control-dark mt-4" placeholder="Repeat password" />
                        {(!this.state.passwordValid && this.state.passwordTouched) ? <FormFeedback>Password is not in valid form.</FormFeedback> : null}
                        {(!this.state.passMatch && this.state.passwordRepeatTouched) ? <FormFeedback>Passwords don't match.</FormFeedback> : null}
                        <FormText color="muted">Please provide a strong password (at least 5 characters).</FormText>
                    </FormGroup>

                    <Button type="submit" color="primary"
                        disabled={!(
                            this.state.emailValid &&
                            this.state.emailTouched &&
                            this.state.nameValid &&
                            this.state.nameTouched &&
                            this.state.usernameValid &&
                            this.state.usernameTouched &&
                            this.state.passwordValid &&
                            this.state.passwordTouched &&
                            this.state.passMatch
                        )} >Register</Button>
                </Form>
            </div>

        );
    }
}

RegisterPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.auth.isFetching,
        statusText: state.auth.statusText
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        registerUser: (user) => {
            dispatch(registerUser(user));
        },
        updateTitle: (pageTitle, categoryTitle) => {
            dispatch(updateTitle(pageTitle, categoryTitle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
