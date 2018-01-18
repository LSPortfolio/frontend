import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const port = process.env.PORT || 5280;

export class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            username: '',
            password: ''
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }

    handleChangeUsername(e) {
        this.setState({ userName: e.target.value });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleChangeQuestion(e) {
        this.setState({ question: e.target.value });
    }

    handleChangeAnswer(e) {
        this.setState({ answer: e.target.value });
    }

    resetPassword(event) {
        event.preventDefault();
        const data = {
            username: this.state.userName,
            password: this.state.password,
            question: this.state.question,
            answer: this.state.answer
        };
        axios.post(`http://localhost:{port}/user/forgotPassword`, data)
        .then((res) => {
            alert('Your password has been reset!');
        })
        .catch((err) => {
            alert('Password reset unsuccessful!');
        })
    }

    render() {
        return (
            <div style={{justifyContent: 'center', color: 'dodgerBlue', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <form>
                        <h2><i>Forgot Password:</i></h2><br/>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                placeholder='Username'
                                onChange={ this.handleChangeUsername }
                                value={ this.state.userName }
                                type = 'text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                placeholder='New Password'
                                onChange={ this.handleChangePassword }
                                value={ this.state.password }
                                type = 'text'
                            />
                        </FormGroup>
                        <p>*Security Question*</p>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                placeholder='Answer'
                                onChange={ this.handleChangeAnswer }
                                value={ this.state.answer }
                                type = 'text'
                            />
                        </FormGroup>
                        <button style={{color: 'darkBlue'}} onClick={ this.resetPassword } >Reset Password</button>
                    </form>
                </div>
                <p style={{display: 'flex', justifyContent: 'center'}}>*If you forgot the answer to your security question, click <Link style={{paddingLeft: 7, color: 'maroon'}} to='/passwordToken'>here</Link>.*</p>
            </div>
        );
    }
}