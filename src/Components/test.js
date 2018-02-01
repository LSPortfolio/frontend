import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Mapper extends Component {
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
        let nums = this.state.nums;
        return (
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
                <div>
                    <h2>{ this.props.project }</h2>
                    <img className='testimage' src={ this.props.pic } />
                    <h4>{ this.props.name }</h4>
                </div>
            </div>
        );
    }
}

// { nums.map(x => <div>{x}</div>) }

// <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
// <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
// <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
// <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
// <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
// <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />
// <ShowProjects name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
// <ShowProjects name={this.state.names.two} project={this.state.projects.two} pic={this.state.pics.two} />
// <ShowProjects name={this.state.names.three} project={this.state.projects.three} pic={this.state.pics.three} />

// <h2 style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>{ this.props.project }</h2>
// <img className='testimage' src={this.props.pic} />
// <h4 style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>{ this.props.name }</h4>

// <Grid>
//     <Row style={{display: 'flex'}}>
//         <Col xs sm md lg>
//             <h2>{ this.props.project }</h2>
//             <img className='testimage' src={ this.props.pic } />
//             <h4>{ this.props.name }</h4>
//         </Col>
//         <Col xs sm md lg>
//             <h2>{ this.props.project }</h2>
//             <img className='testimage' src={ this.props.pic } />
//             <h4>{ this.props.name }</h4>
//         </Col>
//         <Col xs sm md lg>
//             <h2>{ this.props.project }</h2>
//             <img className='testimage' src={ this.props.pic } />
//             <h4>{ this.props.name }</h4>
//         </Col>
//     </Row>
// </Grid>

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

            <div>
            <Grid>
                <Row>
                    <Col>Title</Col>
                </Row>
            </Grid>
                
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

        const dummySentences = [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            'Donec hendrerit tempor tellus.',
            'Donec pretium posuere tellus.',
            'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'Nulla posuere.',
            'Donec vitae dolor.',
            'Nullam tristique diam non turpis.',
            'Cras placerat accumsan nulla.',
            'Nullam rutrum.',
            'Nam vestibulum accumsan nisl.'
        ];

        return (
            <div>
                <Mapper name={this.state.names.one} project={this.state.projects.one} pic={this.state.pics.one} />
            </div>
        );
    }
}