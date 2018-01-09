import React, { Component } from 'react';

const port = process.env.PORT || 5280;

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        fetch(`localhost:${port}/userLogin`, {
            method: 'put',
            body: {
                question: this.state.question,
                username: this.state.username,
                password: this.state.password
            }
        })
        .then((res) => {
            return res.json();
        });
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Forgot Password:</h2><br/>
                    <label style={{marginRight: 25}}>Username:</label>
                    <input onChange={(e) => this.setState({username: e.target.value})} value={this.state.userName} type="text" name="username" /><br/>
                    <label style={{marginRight: 25}}>New Password:</label>
                    <input onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="text" name="password" /><br/>
                    <label style={{marginRight: 25}}>Question:</label>
                    <input type="text" onChange={(e) => this.setState({question: e.target.value})} /><br/>
                    <input type='submit' value="Change Password" />
                
                </form>

            </div>
        );
    }
}