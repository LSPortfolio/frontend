import React, { Component } from 'react';

const port = process.env.PORT || 5280;

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    componentDidMount() {
        fetch(`localhost:${port}/userLogin`, {
            method: 'post',
            body: JSON.stringify({
                username: this.state.userName,
                password: this.state.password
            })
        })
        .then((res) => {
            return res.json();
        })
    }

    render() {
        return (
            <div>
            <h2><i>Sign In:</i></h2>
                <form>
                    <input style={{color: 'dodgerBlue'}} placeholder="Username" onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName} type="text" name="username" /><br/>
                    <input style={{color: 'dodgerBlue'}} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="password" name="password" /><br/>
                    <input style={{color: 'red'}} type='submit' value="Sign In" />
                
                </form>
            </div>
        );
    }
}