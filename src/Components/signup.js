import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup } from 'react-bootstrap';

import { register } from '../Actions';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            question: 'dog',
            answer: '',
            role: 'student'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        const { dispatch } = this.props
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password,
            question: this.state.question,
            answer: this.state.answer,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            role: this.state.role
        };
        dispatch(register(data));
    }

    render() {
        return (
            <div style={{backgroundColor: 'white', color: 'dodgerBlue', display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h2><i>Sign Up:</i></h2>
                    <select name='role' onChange={ this.handleChange }>
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
                                onChange={ this.handleChange }
                                placeholder="First Name"
                                type='text'
                                name='firstname'
                                value={ this.state.firstname }
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}style={{color: 'dodgerBlue'}}
                                onChange={ this.handleChange }
                                placeholder="Last Name"
                                type='text'
                                name='lastname'
                                value={ this.state.lastname }
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                onChange={ this.handleChange }
                                placeholder='Email'
                                type='text'
                                name='email'
                                value={ this.state.email }
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                onChange={ this.handleChange }
                                placeholder="Username"
                                type= 'text'
                                name='username'
                                value={this.state.username}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                onChange={ this.handleChange }
                                placeholder='Password'
                                type='password'
                                name='password'
                                value={ this.state.password }
                            />
                        </FormGroup>
                        <FormGroup>
                            <label style={{marginRight: 10, color: 'darkBlue'}}>Security Question:</label>
                            <select name='question' style={{color:'dodgerBlue'}} onChange={ this.handleChange }>
                                <option value='dog' style={{color: 'red'}}>What is your dog's name?</option>
                                <option value='color' style={{color: 'red'}}>What is your favorite color?</option>
                                <option value='schoolyear' style={{color: 'red'}}>What year did you graduate from high school?</option>
                                <option value='maidenname' style={{color: 'red'}}>What is your mother's maiden name?</option>
                                <option value='firstcar' style={{color: 'red'}}>What was the model of your first car?</option>
                            </select>
                            <FormControl name='answer' type='text' onChange={ this.handleChange } value={ this.state.answer }/>
                        </FormGroup>
                        <button style={{color: 'darkBlue'}} onClick={ this.handleSubmit }>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(SignUp)
export { connectedRegisterPage as SignUp }