import React, { Component } from 'react';
import '../App.css';

class ShowProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: {
                one: require('../Components/TestFiles/1.jpg')
            },
            names: {
                one: 'John Doe',
            },                
            projects: {
                one: 'Project 1',
            },
        };
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column',}}>
                <h2 style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>{ this.state.projects.one }</h2>
                <img className='testimage' src={this.state.pics.one} />
                <h4 style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>{ this.state.names.one }</h4>
            </div>
        );
    }
}

export default class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: {
                one: require('../Components/TestFiles/1.jpg')
            },
            names: {
                one: 'John Doe',
            },                
            projects: {
                one: 'Project 1',
            }
        };
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />
                <ShowProjects />                
            </div>

        );
    }
}