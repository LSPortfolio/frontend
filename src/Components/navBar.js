import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import '../App.css';

const cs1List=[
  'Jiovan Melendez',
  'Antonio Melendez',
  'Sarah Majors',
  'Manisha Lal',
  'Evan Allen',
  'Dan Winslow',
  'Tyge Johnson',
  'Brian Durbin',
  'Jesh Yoon',
  'Latoyya Smith',
  'Jason Campbell',
  'Ely Alamillo',
  'Jake Cooley',
  'Patrick Kennedy',
];

const cs2List = [
  'Joram Clervius',
  'Eric Blancas',
  'Roland Canuto',
  'Tyler Long',
  'Matt Jackson',
  'Adam Lower',
  'Ryan Lowe',
  'Dylan Scheidt'
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(cs1List);
shuffleArray(cs2List);

export class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <div style={{backgroundColor: 'dodgerBlue'}} className="container-row" id="header">
            <header style={{ width: "100%" }}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className="navigation">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{marginLeft: 5, marginRight: 10}}><img alt="logo" src={ require('../LambdaLogo.png') } /></div>
                  <div className="hidden-sm-down"><h1>Lambda Showcase</h1></div>
                </div>
                <div style={{marginRight: 5}}>
                  <Button className='navbuttons'><Link to='/signin'>Sign In</Link></Button>            
                  <Button className='navbuttons'><Link to='/signup'>Sign Up</Link></Button>
                  <Button className='navbuttons'><Link to='/submit'>Submit</Link></Button>
                  <Button className='navbuttons'><Link to='/Projects'>Student Projects</Link></Button>
                  <DropdownButton pullRight id='dropdown' title="Classes">
                    <DropdownButton pullRight className='graduated' title="CS1" id='cs1'>
                    <MenuItem><Link style={{ color: 'black' }} to='/cs1'>All CS1</Link></MenuItem>
                      {
                        cs1List.map((each) => <MenuItem>{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS2" id='cs2'>
                    <MenuItem><Link style={{ color: 'black' }} to='/cs2'>All CS2</Link></MenuItem>
                      {
                        cs2List.map((each) => <MenuItem>{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS3" id='cs3'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs3'>All CS3</Link></MenuItem>
                    </DropdownButton>
                    <DropdownButton pullRight title="CS4" id='cs4'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs4'>All CS4</Link></MenuItem>
                    </DropdownButton>
                    <DropdownButton pullRight title="CS5" id='cs5'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs5'>All CS5</Link></MenuItem>
                    </DropdownButton>
                    <DropdownButton pullRight title="CS6" id='cs6'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs6'>All CS6</Link></MenuItem>
                    </DropdownButton>
                    <DropdownButton pullRight title="CS7" id='cs7'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs7'>All CS7</Link></MenuItem>
                    </DropdownButton>
                </DropdownButton>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
