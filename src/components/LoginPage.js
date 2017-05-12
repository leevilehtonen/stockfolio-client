import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Form className="login-form">
                    <FormGroup className="text-white">
                        <Label for="usernameInput">Username</Label>
                        <Input type="text" name="username" id="usernameInput" className="text-white" placeholder="Enter username" />
                        <FormText color="muted">Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup className="text-white">
                        <Label for="passwordInput">Password</Label>
                        <Input type="password" name="password" id="passwordInput" className="text-white" placeholder="Enter password" />
                        <FormText color="muted">Example help text that remains unchanged.</FormText>
                    </FormGroup>

                    <Button type="submit" color="primary">Login</Button>
                </Form>
            </div>
        );
    }
}

LoginPage.propTypes = {

};

export default LoginPage;