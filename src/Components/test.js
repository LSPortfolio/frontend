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
                <h2 style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>{ this.props.project }</h2>
                <img className='testimage' src={this.props.pic} />
                <h4 style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>{ this.props.name }</h4>
            </div>
        );
    }
}

export default class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: {
                one: require('../Components/TestFiles/1.jpg'),
                two: require('../Components/TestFiles/2.jpg'),
                three: require('../Components/TestFiles/3.jpg'),
            },
            names: {
                one: 'John Doe',
                two: 'Jane Doe',
                three: 'John Smith'
            },                
            projects: {
                one: 'Project 1',
                two: 'Project 2',
                three: 'Project 3',
            }
        };
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
                <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
                <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
                <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
                <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
                <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
                <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
                <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
                <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
                <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
                <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
                <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
                <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
                <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
                <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
                <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
                <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
                <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
                <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
                <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
                <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />             
            </div>

        );
    }
}