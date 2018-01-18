import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import NavbarLambda from './navbarLambda'

const port = process.env.PORT || 5280;

export default class SubmitProject extends Component {
    constructor() {
        super();
        this.state = {
            studentName: '',
            lambdaClass: '',
            projectName: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
    }

    handleClassChange(e) {
        let tempClass = e.target.value;
        tempClass = tempClass.split('');
        for (let i = 0; i < tempClass.length; i++) {
            tempClass[i] = tempClass[i].toUpperCase();
        }
        tempClass = tempClass.join('');
        this.setState({ lambdaClass: tempClass });
    }

    handleNameChange(e) {
        this.setState({ studentName: e.target.value });
    }

    handleProjectChange(e) {
        this.setState({ projectName: e.target.value });
    }

    personalProjectSubmit() {
        
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <header className="App-header" style={{color: 'white', backgroundColor: 'dodgerBlue', display: 'flex', flexDirection: 'column'}}>
                    <NavbarLambda />
                </header>
                <FormGroup
                    style={{width: 300, display: 'flex', flexDirection: 'column'}}
                >
                    <h1 style={{width: 1000, justifyContent: 'center'}}>Submit Your Personal Project</h1>
                    <FormControl
                        style={{color: 'dodgerBlue'}}
                        placeholder='Lambda Class'
                        onChange={ this.handleClassChange }
                    />
                    <FormControl
                        style={{color: 'dodgerBlue'}}
                        placeholder='Name'
                        onChange={ this.handleNameChange }
                    />
                    <FormControl
                        style={{color: 'dodgerBlue'}}
                        placeholder='Project Name'
                        onChange={ this.handleProjectChange }
                    />
                    <button style={{color: 'dodgerBlue'}}>Submit</button>
                </FormGroup>
            </div>
        );
    }
}