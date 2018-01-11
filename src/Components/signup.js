import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';

const port = process.env.PORT || 5280;

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            question: '',
        }

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.signup = this.signup.bind(this);
    }


    handleFirstName(event) {
        this.setState({ firstname: event.target.value });
    }

    handleLastName(event) {
        this.setState({ lastname: event.target.value });
    }

    handleUserName(event) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleQuestion(event) {
        this.setState({ question: event.target.value });
    }

    signup(event) {
        event.preventDefault();
        const data = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            question: this.state.question,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        };
        axios.post(`http://localhost/${port}/createUser`, data)
            .then(res => {
                alert('New User Successful!');
            })
            .catch(err => {
                alert('Signup Unsuccessful!');
            }
        )
    }

    render() {
        return (
            <div>
            <h2><i>Sign Up:</i></h2>
                <form>
                    <FormGroup>
                        <FormControl
                            style={{color: 'dodgerBlue'}}
                            onChange={ this.handleFirstName }
                            placeholder="First Name"
                            type='text'
                            value={ this.state.firstname }
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControl
                            style={{color: 'dodgerBlue'}}style={{color: 'dodgerBlue'}}
                            onChange={ this.handleLastName }
                            placeholder="Last Name"
                            type='text'
                            value={ this.state.lastname }
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <FormControl
                            style={{color: 'dodgerBlue'}}
                            onChange={ this.handleEmail }
                            placeholder='Email'
                            type='text'
                            value={ this.state.email }
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            style={{color: 'dodgerBlue'}}
                            onChange={ this.handleUserName }
                            placeholder="Username"
                            type= 'text'
                            value={this.state.username}
                        />
                    </FormGroup>                    
                    <FormGroup>
                        <FormControl
                            style={{color: 'dodgerBlue'}}
                            onChange={ this.handlePassword }
                            placeholder='Password'
                            type='password'
                            value={ this.state.password }
                        />
                    </FormGroup>
                    <FormGroup>
                        <label style={{marginRight: 10, color: 'darkBlue'}}>Security Question:</label>
                        <select style={{color:'dodgerBlue', paddingRight: 23}} onChange={ this.handleQuestion }>
                            <option value='dog' style={{color: 'red'}}>What is your dog's name?</option>
                            <option value='color' style={{color: 'red'}}>What is your favorite color?</option>
                            <option value='schoolyear' style={{color: 'red'}}>What year did you graduate from high school?</option>
                            <option value='maidenname' style={{color: 'red'}}>What is your mother's maiden name?</option>
                            <option value='firstcar' style={{color: 'red'}}>What was the model of your first car?</option>                    
                        </select>
                    </FormGroup>
                    <button style={{color: 'red'}} onClick={ this.signup }>Sign Up</button>
                </form>
            </div>
        );
    }
}

