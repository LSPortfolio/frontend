import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarLambda from './navbarLambda';

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
            answer: '',
            accountType: ''
        }

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChangeAccount = this.handleChangeAccount.bind(this);
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

    handleChangeAccount(event) {
        this.setState({ accountType: event.target.value });
    }

    signup(event) {
        event.preventDefault();
        const data = {
            "username": "roland",
            "password": "password",
            "answer": "nothing",
            "email": "rolandc5@hotmail.com",
            "firstname": "roland",
            "lastname": "canuto",
            "role": "student"
        };
        axios.post(`http://localhost:${port}/user/createUser`, data)
            .then(res => {
                alert('New User Successful!');
            })
            .catch(err => {
                console.log(err);
                alert('Signup Unsuccessful!');
            }
        )
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <header className="App-header" style={{color: 'white', backgroundColor: 'dodgerBlue', display: 'flex', flexDirection: 'column'}}>
                        <NavbarLambda />
                    </header>
                    <h2><i>Sign Up:</i></h2>
                    <select onChange={ this.handleChangeAccount }>
                        <option disabled='true' placeholder='default'>Account Type</option>
                        <option value='student'>Student</option>
                        <option value='instructor'>Instructor</option>
                        <option value='recruiter'>Recruiter</option>
                        <option value='general'>General</option>
                    </select>
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
                            <select style={{color:'dodgerBlue'}} onChange={ this.handleQuestion }>
                                <option value='dog' style={{color: 'red'}}>What is your dog's name?</option>
                                <option value='color' style={{color: 'red'}}>What is your favorite color?</option>
                                <option value='schoolyear' style={{color: 'red'}}>What year did you graduate from high school?</option>
                                <option value='maidenname' style={{color: 'red'}}>What is your mother's maiden name?</option>
                                <option value='firstcar' style={{color: 'red'}}>What was the model of your first car?</option>                    
                            </select>
                        </FormGroup>
                        <button style={{color: 'darkBlue'}} onClick={ this.signup }>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

