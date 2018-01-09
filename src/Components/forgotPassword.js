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
                    <h2><i>Forgot Password:</i></h2><br/>
                    <input style={{color: 'dodgerBlue'}} placeholder='Username' onChange={(e) => this.setState({username: e.target.value})} value={this.state.userName} type="text" name="username" /><br/>
                    <input style={{color: 'dodgerBlue'}} placeholder='New Password' onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="password" name="password" /><br/>
                    <input style={{color: 'dodgerBlue'}} placeholder='Question' type="text" onChange={(e) => this.setState({question: e.target.value})} /><br/>
                    <input style={{color: 'red'}} type='submit' value="Change Password" />
                
                </form>

            </div>
        );
    }
}